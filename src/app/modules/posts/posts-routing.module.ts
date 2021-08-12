import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';

export const routes: Routes = [
  { path: '', component: PostListComponent },
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
