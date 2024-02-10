import React, { useCallback, useEffect, useState } from "react";

// import components
import { BlogCard } from "@/components/global";

// import service
import { BlogServices } from "@/components/services";

// import type
import { IPosts } from "@/components/types";

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

  return (
    <div className="px-8 pt-6">
      <div className="space-y-4">
        {allPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
