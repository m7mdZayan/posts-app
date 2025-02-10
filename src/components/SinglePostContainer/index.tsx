"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import PostsCard from "../postCard";
import { getSinglePost } from "@/api/posts";

interface ISinglePostContainerProps {
  postId: string;
}

const SinglePostContainer: React.FC<ISinglePostContainerProps> = ({
  postId,
}) => {
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getSinglePost(postId),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="mt-8">Loading post data...</p>
      </div>
    );
  }

  if (error) {
    return <p>There is an error, please try again later!</p>;
  } else if (post) {
    return <PostsCard post={post} hideIcons />;
  }
};

export default SinglePostContainer;
