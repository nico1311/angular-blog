import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL } from '../../constants';
import type { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private http: HttpClient) { }

  private url = `${BASE_URL}/albums`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url);
  }

  getAlbumsByUser(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${BASE_URL}/users/${userId}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.url}/${id}`);
  }
}
