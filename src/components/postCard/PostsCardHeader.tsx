"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { IPost } from "@/utils/types";
import { deletePost } from "@/api/posts";
import Link from "next/link";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { showSuccesMessage } from "@/utils/functions";
import UpdatePostModal from "../UpdatePostModal";

interface IPostsCardHeaderProps {
  post: IPost;
  hideIcons?: boolean;
}

const PostsCardHeader: React.FC<IPostsCardHeaderProps> = ({
  post,
  hideIcons,
}) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleDelete = async (id: number) => {
    const status = await deletePost(id);
    if (status === 200) {
      showSuccesMessage();
    }
  };
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
      {hideIcons ? null : (
        <div className="flex items-center gap-4 text-text-light-2">
          <Link href={`/posts/${post?.id}`} key={post?.id}>
            <FontAwesomeIcon icon={faEye} width={16} height={16} />
          </Link>
          <FontAwesomeIcon
            icon={faPenToSquare}
            width={16}
            height={16}
            onClick={() => setIsUpdateModalOpen(true)}
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => handleDelete(post?.id)}
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      )}

      <UpdatePostModal
        isOpen={isUpdateModalOpen}
        closeModal={() => setIsUpdateModalOpen(false)}
        post={post}
      />
    </header>
  );
};

export default PostsCardHeader;
