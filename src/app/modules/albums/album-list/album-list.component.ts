import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AlbumsService } from '../albums.service';
import type { Album } from '../album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) { }

  public albums: Album[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const userId = Number(params['userId']);

      if (Number.isNaN(userId)) {
        this.albumsService.getAllAlbums().subscribe((data) => {
          this.albums = data;
        });
      } else {
        this.albumsService.getAlbumsByUser(userId).subscribe((data) => {
          this.albums = data;
        });
      }
    });
  }
}
