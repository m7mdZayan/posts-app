import React from "react";
import PostsCardHeader from "./PostsCardHeader";
import PostsCardFooter from "./PostsCardFooter";
import { IPost } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { getSingleComment } from "@/api/comments";
import Comment from "../Comment";
import Link from "next/link";
import NewComment from "../NewComment";

interface IPostsCardProps {
  post: IPost;
  hideIcons?: boolean;
}

const PostsCard: React.FC<IPostsCardProps> = ({ post, hideIcons }) => {
  const {
    isLoading: isLoadingComments,
    error: errorLoadingComments,
    data: comment,
  } = useQuery({
    queryKey: ["comments"], // Query key as an array
    queryFn: getSingleComment, // The function that fetches the data
  });

  return (
    <div className="bg-card-background-1 p-4 text-text-light-1 rounded-lg my-6">
      <PostsCardHeader post={post} hideIcons={hideIcons} />
      <h2 className="font-medium mb-3">{post?.title}</h2>
      <p className="mb-3">{post?.body}</p>
      <Link href={`/posts/${post?.id}`} key={post?.id}>
        <PostsCardFooter post={post} />
      </Link>
      <hr className="my-6 border-text-light-2 bg-text-light-2" />
      {isLoadingComments ? <p>Loading comments...</p> : null}
      {errorLoadingComments ? (
        <p>There was an error fetching comments</p>
      ) : null}
      <NewComment />
      {comment ? <Comment comment={comment} /> : null}
    </div>
  );
};

export default PostsCard;
