import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumGalleryComponent } from './album-gallery/album-gallery.component';

export const routes: Routes = [
  { path: ':id/gallery', component: AlbumGalleryComponent },
  { path: ':id', component: AlbumDetailsComponent },
  { path: '', component: AlbumListComponent }
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
