import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
  createPost,
  BASE_URL,
} from "./posts";
import { INewPost, IUpdatedPost } from "@/utils/types";

// Initialize the mock adapter
const mock = new MockAdapter(axios);

describe("API Functions", () => {
  afterEach(() => {
    mock.reset(); // Reset the mock after each test
  });

  describe("getPosts", () => {
    it("should fetch posts successfully", async () => {
      const mockPosts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ];

      mock.onGet(`${BASE_URL}/posts?limit=8`).reply(200, { posts: mockPosts });

      const result = await getPosts();

      expect(result).toEqual(mockPosts);
    });

    it("should handle errors when fetching posts", async () => {
      mock.onGet(`${BASE_URL}/posts?limit=8`).reply(500);

      await expect(getPosts()).rejects.toThrow();
    });
  });

  describe("getSinglePost", () => {
    it("should fetch a single post successfully", async () => {
      const mockPost = { id: 1, title: "Single Post" };

      mock.onGet(`${BASE_URL}/posts/1`).reply(200, mockPost);

      const result = await getSinglePost("1");

      expect(result).toEqual(mockPost);
    });

    it("should handle errors when fetching a single post", async () => {
      mock.onGet(`${BASE_URL}/posts/1`).reply(404);

      await expect(getSinglePost("1")).rejects.toThrow();
    });
  });

  describe("updatePost", () => {
    it("should update a post successfully", async () => {
      const updatedPost: IUpdatedPost = {
        userId: 1,
        title: "Updated Post",
        body: "This post has been updated.",
      };

      mock.onPut(`${BASE_URL}/posts/1`).reply(200, updatedPost);

      const result = await updatePost(updatedPost);

      expect(result).toEqual(updatedPost);
    });

    it("should handle errors when updating a post", async () => {
      const updatedPost: IUpdatedPost = {
        userId: 1,
        title: "Updated Post",
        body: "This post has been updated.",
      };

      mock.onPut(`${BASE_URL}/posts/1`).reply(500);

      await expect(updatePost(updatedPost)).rejects.toThrow();
    });
  });

  describe("deletePost", () => {
    it("should delete a post successfully", async () => {
      mock.onDelete(`${BASE_URL}/posts/1`).reply(200);

      const result = await deletePost(1);

      expect(result).toBe(200);
    });

    it("should handle errors when deleting a post", async () => {
      mock.onDelete(`${BASE_URL}/posts/1`).reply(500);

      await expect(deletePost(1)).rejects.toThrow();
    });
  });

  describe("createPost", () => {
    it("should create a post successfully", async () => {
      const newPost: INewPost = {
        body: "This is a new post.",
        userId: 1,
      };

      mock.onPost(`${BASE_URL}/posts/add`).reply(200);

      const result = await createPost(newPost);

      expect(result).toBe(200);
    });

    it("should handle errors when creating a post", async () => {
      const newPost: INewPost = {
        body: "This is a new post.",
        userId: 1,
      };

      mock.onPost(`${BASE_URL}/posts/add`).reply(500);

      await expect(createPost(newPost)).rejects.toThrow();
    });
  });
});
