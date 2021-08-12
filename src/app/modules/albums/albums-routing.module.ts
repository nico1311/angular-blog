import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumListComponent } from './album-list/album-list.component';

export const routes: Routes = [
  { path: '', component: AlbumListComponent },
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
