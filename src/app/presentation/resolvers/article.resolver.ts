// src/app/resolvers/article.resolver.ts
import { inject } from '@angular/core';
import {
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ArticleService } from '../../domain/services/article.service';
import { Article } from '../../domain/model/article.model';

export const articleResolver: ResolveFn<Article | null> = (
  route: ActivatedRouteSnapshot
): Observable<Article | null> => {
  const articleService = inject(ArticleService);
  const router = inject(Router);
  const id = route.paramMap.get('id');
  if (!id) {
    router.navigate(['/articles']);
    return of(null);
  }
  return articleService.getById(Number(id)).pipe(
    catchError(() => {
      router.navigate(['/articles']);
      return of(null);
    })
  );
};
