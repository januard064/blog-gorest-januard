import React, { useCallback, useEffect, useState } from "react";

// import components
import { LoadingBar } from "@/components/global";

// import service
import { BlogServices } from "@/components/services";

// import type
import { IPosts } from "@/components/types";

// import container
import BlogPostsContainer from "@/components/container/blog-posts";

const HomePage = () => {
  const { getALlPosts } = BlogServices();

  const [isLoadingAllPosts, setIsLoadingAllPosts] = useState<boolean>(false);
  const [allPosts, setAllPosts] = useState<IPosts[]>([]);

  const fetchALlPosts = useCallback(async () => {
    setIsLoadingAllPosts(true);
    try {
      const resAllPosts = await getALlPosts();
      setAllPosts(resAllPosts);
    } catch (error) {
      console.log("ERROR");
    } finally {
      setIsLoadingAllPosts(false);
    }
  }, [getALlPosts]);

  useEffect(() => {
    fetchALlPosts();
  }, []);

  if (isLoadingAllPosts) {
    return (
      <div className="h-[70vh]">
        <LoadingBar />
      </div>
    );
  }

  return (
    <div className="md:px-8 px-4 pb-10">
      <BlogPostsContainer postDatas={allPosts} />
    </div>
  );
};

export default HomePage;
