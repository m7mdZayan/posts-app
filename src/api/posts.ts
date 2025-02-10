import { INewPost, IUpdatedPost } from "@/utils/types";
import axios from "axios";

export const BASE_URL = "https://dummyjson.com";

export const getPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts?limit=8`);
  return response?.data?.posts; // Extract the 'posts' array
};

export const getSinglePost = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/posts/${id}`);
  return response?.data;
};

// Update a post
export const updatePost = async (postData: IUpdatedPost) => {
  const response = await axios.put(
    `${BASE_URL}/posts/${postData.userId}`,
    postData,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
};

// Delete a post
export const deletePost = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/posts/${id}`);
  return response.status;
};

export const createPost = async (postData: INewPost) => {
  const response = await axios.post(`${BASE_URL}/posts/add`, postData, {
    headers: { "Content-Type": "application/json" },
  });
  return response.status;
};
