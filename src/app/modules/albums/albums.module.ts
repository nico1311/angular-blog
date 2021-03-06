import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './albums-routing.module';

import { SharedModule } from '../../components/shared/shared.module';

import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumGalleryComponent } from './album-gallery/album-gallery.component';

@NgModule({
  declarations: [
    AlbumListComponent,
    AlbumDetailsComponent,
    AlbumGalleryComponent
  ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ],
  exports: [
    AlbumListComponent
  ]
})
export class AlbumsModule {

}
