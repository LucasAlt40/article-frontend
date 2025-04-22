import { Category } from './category.model';

export type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  image: string;
  categories: Category[];
};

export type ArticleList = Article & {
  resume: string;
};
