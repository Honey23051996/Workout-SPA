import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './Category';


@Injectable(
)
export class WorkoutService {
  private url = 'http://localhost:61038/api/Category';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Category[]> {
    return this.http.get <Category[]>(this.url);
  }
  getById(id: string): Observable<Category> {
    return this.http.get<Category>(this.url + `/${id}`);
  }

  save(cate: Category) {
    return this.http.post(this.url, cate);
  }

  update(cate: Category) {
    return this.http.put(this.url, cate);
  }

  delete(id: number) {
    return this.http.delete(this.url + `/${id}`);
  }



}
