import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly apiUrl: string = environment.apiUrl + '/category';
  private readonly http: HttpClient = inject(HttpClient);

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}`);
  }
}
