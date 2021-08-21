import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

export const routes: Routes = [
  { path: ':id', component: PostDetailsComponent },
  { path: '', component: PostListComponent },
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
