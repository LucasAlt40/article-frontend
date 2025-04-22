import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment, CommentRequest } from '../model/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly apiUrl: string = environment.apiUrl + '/comment';
  private readonly http: HttpClient = inject(HttpClient);

  public getCommentsByArticleId(articleId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `${this.apiUrl}/getAllByArticleId/${articleId}`
    );
  }

  public addComment(comment: CommentRequest): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiUrl}`, comment);
  }
}
