"use client";

import React, { useState } from "react";
import { INewPost } from "@/utils/types";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "@/api/posts";
import { showSuccesMessage } from "@/utils/functions";

const NewPost: React.FC = ({}) => {
  const [post, setPost] = useState("");

  const hideSubmitButton = post.trim().length === 0; // to hide the submit button if the input is empty

  const mutation = useMutation({
    mutationFn: (postData: INewPost) => createPost(postData), // Use the createPost function
    onSuccess: () => {
      //  we should Invalidate the "posts" query to refetch the data after creating a new post
      //   queryClient.invalidateQueries({ queryKey: ["posts"] });
      // but as it's a fake API, we don't need to do that (the BE Won't be updated)
      setPost(""); // Clear the input field after successful submission

      showSuccesMessage();
    },
    onError: () => {
      alert("Error creating post:");
    },
  });

  const handleNewPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ body: post, userId: 1 });
  };

  return (
    <div className="bg-card-background-1 rounded-lg mt-4 flex items-center p-6 gap-4">
      <Image
        src="/images/profile-photo.webp"
        alt="man in black suit jacket standing near railings"
        className="rounded-full w-12 h-12"
        width={48}
        height={48}
      />
      <form
        className="bg-card-background-2 p-4 w-[80%] rounded-3xl relative"
        onSubmit={handleNewPost}
      >
        <input
          className="bg-transparent hover:border-0 focus:border-0 outline-none w-full pr-6"
          placeholder="what’s on your mind ?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
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

export default NewPost;
