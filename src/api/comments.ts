import axios from "axios";
import { BASE_URL } from "./posts";

export const getComments = async () => {
  const response = await axios.get(`${BASE_URL}/comments?limit=8`);
  return response?.data?.comments;
};

export const getSingleComment = async () => {
  const response = await axios.get(`${BASE_URL}/comments/1`);
  return response?.data;
};
