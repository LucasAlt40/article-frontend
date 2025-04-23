import { Category } from './category.model';

export type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  image: string;
  resume: string;
  categories: Category[];
};

export type ArticleList = Article & {
  resume: string;
};

export type ArticleRequest = {
  title: string;
  content: string;
  author: string;
  resume: string;
  image: string;
  categoriesId: number[];
};
