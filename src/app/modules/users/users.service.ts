import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL } from '../../constants'
import type { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {

  }

  private url = `${BASE_URL}/users`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  handleError() {
    console.log('something exploded');
  }
}
