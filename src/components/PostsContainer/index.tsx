import React from "react";
import { useQuery } from "@tanstack/react-query";
import PostsCard from "../postCard";
import { getPosts } from "@/api/posts";
import { IPost } from "@/utils/types";

const PostsContainer: React.FC = ({}) => {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["posts"], // Query key as an array
    queryFn: getPosts, // The function that fetches the data
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <p className="mt-8">Loading posts...</p>
      </div>
    );
  if (error) return <p>there is an error please try again later!</p>;

  return posts?.map((post: IPost) => <PostsCard key={post.id} post={post} />);
};

export default PostsContainer;
