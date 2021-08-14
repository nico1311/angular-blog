import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
  { path: ':id', component: UserDetailsComponent },
  { path: '', component: UserListComponent },

]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
