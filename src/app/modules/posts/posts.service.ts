import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL } from '../../constants';
import type { Post, Comment } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  private url = `${BASE_URL}/posts`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${id}`);
  }

  getPostComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/${id}/comments`);
  }

  getPostsByUser(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${BASE_URL}/users/${userId}/posts`);
  }
}
