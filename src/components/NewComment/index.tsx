"use client";

import React, { useState } from "react";
import { INewComment } from "@/utils/types";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "@/api/posts";
import { showSuccesMessage } from "@/utils/functions";

const NewComment: React.FC = ({}) => {
  const [newComment, setNewComment] = useState("");

  const hideSubmitButton = newComment.trim().length === 0; // to hide the submit button if the input is empty

  const mutation = useMutation({
    mutationFn: (postData: INewComment) => createPost(postData), // Use the createPost function
    onSuccess: () => {
      //  we should Invalidate the "comments" query to refetch the data after creating a new comment
      // but as it's a fake API, we don't need to do that (the BE Won't be updated)
      setNewComment(""); // Clear the input field after successful submission
      showSuccesMessage();
    },
    onError: () => {
      alert("Error adding the comment");
    },
  });

  const handleNewComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ body: newComment, userId: 1, postId: 1 });
  };

  return (
    <div className="flex items-center mb-6 gap-4">
      <Image
        src="/images/profile-photo.webp"
        alt="man in black suit jacket standing near railings"
        className="rounded-full w-12 h-12"
        width={48}
        height={48}
      />
      <form
        className="bg-card-background-2 p-4 w-[90%] lg:w-[70%] rounded-3xl relative"
        onSubmit={handleNewComment}
      >
        <input
          className="bg-transparent hover:border-0 focus:border-0 outline-none w-full pr-6"
          placeholder="add a comment to the post"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        {hideSubmitButton ? null : (
          <button className="absolute right-4 top-4">
            <FontAwesomeIcon
              icon={faPaperPlane}
              width={16}
              height={16}
              color="#AEB1B6"
            />
          </button>
        )}
      </form>
    </div>
  );
};

export default NewComment;
