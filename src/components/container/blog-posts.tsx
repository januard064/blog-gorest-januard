import React from "react";

// import components
import { BlogCard, Pagination } from "../global";

// imprt types
import { IPosts } from "../types";

// import utils
import { usePagination } from "../utils";

const BlogPostsContainer = ({ postDatas }: { postDatas: IPosts[] }) => {
  const { currentPage, setCurrentPage, currentData, totalPage } =
    usePagination(postDatas);

  return (
    <div>
      <div className="space-y-4">
        {currentData?.map((post: any, index: number) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>

      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default BlogPostsContainer;
