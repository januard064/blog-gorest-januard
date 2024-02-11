import React, { useState, useEffect, useCallback } from "react";

// import type
import { IPosts, IComments } from "../types";

// import services
import { BlogServices } from "../services";

// import components
import { DialogBox, LoadingBar } from ".";

export const BlogCard = ({ post }: { post: IPosts }) => {
  const { getPostDetil, getComments } = BlogServices();

  const [isLoadingPostDetail, setIsLoadingPostDetail] =
    useState<boolean>(false);
  const [postDetail, setPostDetail] = useState<IPosts>();

  const [isLoadingComments, setIsLoadingComments] = useState<boolean>(false);
  const [comments, setComments] = useState<IComments[]>([]);

  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const [idPost, setIdPost] = useState<number>();

  const fetchPostDetail = useCallback(async (id: number) => {
    setIsLoadingPostDetail(true);
    try {
      const resPostDetail = await getPostDetil(id);
      setPostDetail(resPostDetail);
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setIsLoadingPostDetail(false);
    }
  }, []);

  const fetchComments = useCallback(
    async (id: number) => {
      setIsLoadingComments(true);
      try {
        const resComments = await getComments(id);
        setComments(resComments);
      } catch (error) {
        console.log("ERROR", error);
      } finally {
        setIsLoadingComments(false);
      }
    },
    [getComments]
  );

  useEffect(() => {
    if (idPost) {
      fetchPostDetail(idPost);
      fetchComments(idPost);
    }
  }, [idPost]);

  const handleOpenDetail = (id: number) => {
    setIdPost(id);
    setIsOpenDialog(true);
  };

  return (
    <>
      <div className="w-full text-black rounded-md bg-white shadow-lg p-6">
        <p className="text-lg font-semibold">{post?.title}</p>
        <p className="mt-2 line-clamp-3">{post?.body}</p>
        <div className="flex justify-end mt-3">
          <p
            onClick={() => handleOpenDetail(post.id)}
            className="hover:border-b border:border-white hover:border-[#FF971D] cursor-pointer h-6 text-gray-500"
          >
            comments
          </p>
        </div>
      </div>

      <DialogBox
        isOpen={isOpenDialog}
        handleClose={() => setIsOpenDialog(false)}
      >
        <div className="h-[60vh] overflow-y-auto p-6">
          <div>
            {isLoadingPostDetail || isLoadingComments ? (
              <div className="w-full h-full"><LoadingBar /></div>
            ) : (
              <div>
                <div>
                  <p className="text-lg font-semibold">{post?.title}</p>
                  <p className="mt-2">{post?.body}</p>
                  <div className="mt-6">
                    {comments.length > 0 ? (
                      <div className="space-y-2">
                        {comments.map((comm, index) => (
                          <div key={index}  className="w-full p-2 bg-[#F9F6F7] rounded-md">
                            <p className="font-semibold text-sm">{comm?.name}</p>
                            <p>{comm?.body}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="w-full justify-center text-sm text-gray-400">
                        No comments yet
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogBox>
    </>
  );
};
