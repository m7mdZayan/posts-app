import React from "react";
import { IComment } from "@/utils/types";
import Image from "next/image";

interface ICommentProps {
  comment: IComment;
}

const Comment: React.FC<ICommentProps> = ({ comment }) => {
  return (
    <div className="flex items-center gap-4 text-sm">
      <Image
        src="/images/profile-photo.webp"
        alt="man in black suit jacket standing near railings"
        className="rounded-full w-12 h-12"
        width={48}
        height={48}
      />
      <div className="bg-card-background-2 rounded-3xl py-2 px-6">
        <h4 className="font-semibold mb-1">{comment?.user?.fullName}</h4>
        <p>{comment?.body}</p>
      </div>
    </div>
  );
};

export default Comment;
