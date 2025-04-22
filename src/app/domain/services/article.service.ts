import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ArticleList } from '../model/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly apiUrl: string = environment.apiUrl + '/article';
  private readonly http: HttpClient = inject(HttpClient);

  public getAllArticles(): Observable<ArticleList[]> {
    return this.http.get<ArticleList[]>(`${this.apiUrl}`);
  }
}
