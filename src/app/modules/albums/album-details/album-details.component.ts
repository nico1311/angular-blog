import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { AlbumsService } from '../albums.service';
import type { Album } from '../album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumsService: AlbumsService
  ) { }

  public album?: Album;

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(albumId).subscribe((data) => {
      this.album = data;
    });
  }

  goBack() {
    this.location.back();
  }
}
