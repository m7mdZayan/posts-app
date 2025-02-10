"use client";

import { updatePost } from "@/api/posts";
import { showSuccesMessage } from "@/utils/functions";
import { IPost, IUpdatedPost } from "@/utils/types";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import Modal from "react-modal";

interface IUpdatePostProps {
  isOpen: boolean;
  closeModal: () => void;
  post: IPost;
}

const UpdatePostModal: React.FC<IUpdatePostProps> = ({
  isOpen,
  closeModal,
  post,
}) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const mutation = useMutation({
    mutationFn: (postData: IUpdatedPost) => updatePost(postData), // Use the createPost function
    onSuccess: () => {
      //  as it's a fake API (the BE Won't be updated)
      showSuccesMessage();
    },
    onError: () => {
      alert("Error updating post:");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ title, body, userId: 1 });
    closeModal();
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text-light-1 bg-card-background-2 p-6 xs:w-[80%] lg:w-[50%] rounded-3xl outline-none border-0"
      contentLabel="Example Modal"
      appElement={document.body}
    >
      <header className="flex justify-between items-center">
        <h2>Edit Post</h2>
        <FontAwesomeIcon
          icon={faXmark}
          width={16}
          height={16}
          color="#AEB1B6"
          onClick={closeModal}
          className="cursor-pointer"
        />
      </header>
      <hr className="my-6" />
      <form onSubmit={handleSubmit}>
        <div className="bg-card-background-1 p-4 rounded-lg mb-4 max-w-96">
          <input
            className="bg-transparent hover:border-0 focus:border-0 outline-none w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="bg-card-background-1 p-4 rounded-lg mb-4">
          <textarea
            className="bg-transparent hover:border-0 focus:border-0 outline-none w-full"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <hr className="my-6" />

        <footer className="flex gap-2 items-center justify-end">
          <button
            className="p-4 w-32 bg-card-background-1 rounded-xl"
            onClick={(e) => handleCancel(e)}
          >
            cancel
          </button>
          <button className="p-4 w-32 bg-primary rounded-xl" type="submit">
            Update
          </button>
        </footer>
      </form>
    </Modal>
  );
};

export default UpdatePostModal;
