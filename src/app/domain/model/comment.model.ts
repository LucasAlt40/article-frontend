export type Comment = {
  id: number;
  content: string;
  author: string;
  createdAt: Date;
  replies: Comment[];
};

export type CommentRequest = {
  author: string;
  content: string;
  articleId: number;
};
