import React from "react";

// import type
import { IPosts } from "../types";

export const BlogCard = ({post} : {post: IPosts}) => {
  return (
    <div className="w-full text-black rounded-md bg-white shadow-lg p-6">
      <p className="text-lg font-semibold">
       {post?.title}
      </p>
      <p className="mt-2 line-clamp-3">
       {post?.body}
      </p>
      <div className="flex justify-end mt-3">
        <p className="hover:border-b border:border-white hover:border-[#FF971D] cursor-pointer h-6 text-gray-500">comments</p>
      </div>
    </div>
  );
};
