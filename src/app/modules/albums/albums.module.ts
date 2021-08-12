import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './albums-routing.module';

import { AlbumListComponent } from './album-list/album-list.component';

@NgModule({
  declarations: [
    AlbumListComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [
    AlbumListComponent
  ]
})
export class AlbumsModule {

}
