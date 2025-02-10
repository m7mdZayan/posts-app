import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons/faThumbsDown";
import { IPost } from "@/utils/types";

interface IPostsCardFooterProps {
  post: IPost;
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
        <span> 8 Comments</span>{" "}
        {/* static as we don't get it in the request */}
        {post?.views ? <span> {post?.views} Views</span> : null}
      </div>
    </footer>
  );
};

export default PostsCardFooter;
