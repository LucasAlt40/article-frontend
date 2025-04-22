// src/app/resolvers/article.resolver.ts
import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ArticleService } from '../../domain/services/article.service';
import { Article } from '../../domain/model/article.model';
import { Comment } from '../../domain/model/comment.model'; // ou o caminho certo do seu tipo
import { CommentService } from '../../domain/services/comment.service';

export type ArticleWithComments = {
  article: Article;
  comments: Comment[];
};

export const articleResolver: ResolveFn<ArticleWithComments | null> = (
  route: ActivatedRouteSnapshot
): Observable<ArticleWithComments | null> => {
  const articleService = inject(ArticleService);
  const commentService = inject(CommentService);
  const router = inject(Router);
  const id = route.paramMap.get('id');
  if (!id) {
    router.navigate(['/articles']);
    return of(null);
  }

  const articleId = Number(id);

  return forkJoin({
    article: articleService.getById(articleId),
    comments: commentService.getCommentsByArticleId(articleId),
  }).pipe(
    catchError(() => {
      router.navigate(['/articles']);
      return of(null);
    })
  );
};
