"use client";
// to be possible to use the react query provider

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsContainer from "@/components/PostsContainer";
import { Toaster } from "react-hot-toast";
import NewPost from "@/components/NewPost";

export default function Home() {
  const queryClient = new QueryClient(); // Create the client for the react query

  return (
    <QueryClientProvider client={queryClient}>
      <main className="container mx-auto max-w-[750px]">
        <NewPost />
        <PostsContainer />
        <Toaster />
      </main>
    </QueryClientProvider>
  );
}
