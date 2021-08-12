import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {

  }

  private url = 'https://jsonplaceholder.typicode.com/users';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllUsers() {
    return this.http.get(this.url);
  }

  handleError() {
    console.log('something exploded');
  }
}
