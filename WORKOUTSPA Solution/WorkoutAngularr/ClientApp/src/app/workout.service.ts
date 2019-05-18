import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './Category';


@Injectable(
)
export class WorkoutService {
  private url = "http://localhost:61038/api/Work";
  constructor(private http: HttpClient) { }
  getAll(): Observable<Category[]> {
    return this.http.get <Category[]>(this.url);
  }
}
