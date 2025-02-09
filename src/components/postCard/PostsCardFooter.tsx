import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faThumbsUp,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons/faThumbsDown";

interface IPostsCardFooterProps {
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

const PostsCardFooter: React.FC<IPostsCardFooterProps> = ({ post }) => {
  return (
    <footer className="flex justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon
            icon={faThumbsUp}
            width={16}
            height={16}
            color="#0866FF"
          />
          <p className="text-sm">{post?.reactions?.likes}</p>
        </div>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon
            icon={faThumbsDown}
            width={16}
            height={16}
            color="#FB1717"
          />
          <p className="text-sm">{post?.reactions?.dislikes}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-text-light-2">
        {/* {post?.comments ? <span> {post?.views} Comments</span> : null} */}
        <span> 20 Comments</span> {/* static */}
        {post?.views ? <span> {post?.views} Views</span> : null}
      </div>
    </footer>
  );
};

export default PostsCardFooter;
