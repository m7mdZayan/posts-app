import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface IPostsCardHeaderProps {
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

const PostsCardHeader: React.FC<IPostsCardHeaderProps> = ({ post }) => {
  return (
    <header className="flex justify-between mb-6">
      <div className="flex items-center gap-2">
        <Image
          src="/images/profile-photo.webp"
          alt="man in black suit jacket standing near railings"
          className="rounded-full w-12 h-12"
          width={48}
          height={48}
        />
        <p className="text-base">John Doe</p>
      </div>
      <div className="flex items-center gap-4 text-text-light-2">
        <FontAwesomeIcon icon={faPenToSquare} width={16} height={16} />
        <FontAwesomeIcon icon={faTrashCan} width={16} height={16} />
      </div>
    </header>
  );
};

export default PostsCardHeader;
