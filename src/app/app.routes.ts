import { Routes } from '@angular/router';
import { LayoutComponent } from './presentation/pages/layout/layout.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { ArticlesComponent } from './presentation/pages/articles/articles.component';
import { ArticleComponent } from './presentation/pages/article/article.component';

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
      },
    ],
  },
];
