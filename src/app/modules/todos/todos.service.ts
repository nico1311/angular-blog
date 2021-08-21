import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL } from '../../constants';
import type { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) { }

  private url = `${BASE_URL}/todos`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  getTodosByUser(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${BASE_URL}/users/${userId}/todos`);
  }

  updateTodo(id: number, data: Partial<Todo>): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${id}`, data, this.httpOptions);
  }

}
