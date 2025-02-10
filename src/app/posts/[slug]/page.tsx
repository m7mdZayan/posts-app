"use client";

import "@/style/globals.css";
import SinglePostContainer from "@/components/SinglePostContainer";
import { useParams } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Page() {
  const queryClient = new QueryClient(); // Create the client for the react query

  const params = useParams(); // Get the params object
  const id = params?.slug as string; // Access slug, handle potential undefined, and cast to string

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-background container mx-auto max-w-[750px]">
        <SinglePostContainer postId={id} />
      </div>
    </QueryClientProvider>
  );
}
