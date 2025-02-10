export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface INewPost {
  body: string;
  userId: number;
}

export interface IUpdatedPost {
  body: string;
  title: string;
  userId: number;
}

export interface IComment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
}

export interface INewComment {
  body: string;
  userId: number;
  postId: number;
}
