import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { AlbumsService } from '../albums.service';
import type { Photo } from '../photo';

@Component({
  selector: 'app-album-gallery',
  templateUrl: './album-gallery.component.html',
  styleUrls: ['./album-gallery.component.css']
})
export class AlbumGalleryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumsService: AlbumsService
  ) { }

  public photos?: Photo[];

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumPhotos(albumId).subscribe((data) => {
      this.photos = data;
    });
  }

  goBack() {
    this.location.back();
  }
}
