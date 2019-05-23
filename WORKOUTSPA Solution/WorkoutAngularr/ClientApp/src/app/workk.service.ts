import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Workout } from './Workout';

@Injectable()
export class WorkkService {
  private url = 'http://localhost:61038/api/Workout';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Workout[]>{
    return this.http.get<Workout[]>(this.url);
  }

  save(wrk: Workout) {
    return this.http.post(this.url, wrk);
  }
  getById(id: string): Observable<Workout> {
    return this.http.get<Workout>(this.url + `/${id}`);
  }

  delete(id: number) {
    return this.http.delete(this.url + `/${id}`);
  }
  update(wrk: Workout) {
    return this.http.put(this.url, wrk);
  }
}
