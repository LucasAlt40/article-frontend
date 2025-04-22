import { Category } from './category.model';

export type ArticleList = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  image: string;
  resume: string;
  categories: Category[];
};
