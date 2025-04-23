import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Article, ArticleList, ArticleRequest } from '../model/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly apiUrl: string = environment.apiUrl + '/article';
  private readonly http: HttpClient = inject(HttpClient);

  public getAllArticles(): Observable<ArticleList[]> {
    return this.http.get<ArticleList[]>(`${this.apiUrl}`);
  }

  public getById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  public createArticle(article: ArticleRequest): Observable<Article> {
    return this.http.post<Article>(`${this.apiUrl}`, article);
  }

  public updateArticle(
    id: number,
    article: ArticleRequest
  ): Observable<Article> {
    return this.http.put<Article>(`${this.apiUrl}/${id}`, article);
  }
}
