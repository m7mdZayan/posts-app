import React from "react";
import PostsCardHeader from "./PostsCardHeader";
import PostsCardFooter from "./PostsCardFooter";

interface IPostsCardProps {
  post: {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
      likes: number;
      dislikes: number;
    };
    views: number;
    userId: number;
  };
}

const PostsCard: React.FC<IPostsCardProps> = ({ post }) => {
  return (
    <div className="bg-card-background-1 p-4 text-text-light-1 rounded-lg my-6">
      <PostsCardHeader post={post} />
      <h2 className="font-medium mb-3">{post?.title}</h2>
      <p className="mb-3">{post?.body}</p>
      <PostsCardFooter post={post} />
      <hr className="my-6 text-text-light-2" />
    </div>
  );
};

export default PostsCard;
