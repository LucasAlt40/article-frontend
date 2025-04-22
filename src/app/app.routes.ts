import { Routes } from '@angular/router';
import { LayoutComponent } from './presentation/pages/layout/layout.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { ArticlesComponent } from './presentation/pages/articles/articles.component';
import { ArticleComponent } from './presentation/pages/article/article.component';
import { articleResolver } from './presentation/resolvers/article.resolver';
import { ArticleFormComponent } from './presentation/pages/article-form/article-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      {
        path: 'articles',
        component: ArticlesComponent,
      },
      {
        path: 'article/:id',
        component: ArticleComponent,
        resolve: { article: articleResolver },
      },
      {
        path: 'article-form',
        component: ArticleFormComponent,
      },
      {
        path: 'article-form/edit/:id',
        component: ArticleFormComponent,
        resolve: { article: articleResolver },
      },
    ],
  },
];
