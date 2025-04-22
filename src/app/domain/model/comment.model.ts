export type Comment = {
  id: number;
  content: string;
  author: string;
  createdAt: Date;
  replies: Comment[];
};
