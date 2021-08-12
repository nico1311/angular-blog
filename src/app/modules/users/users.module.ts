import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './users-routing.module';

import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [
    UserListComponent
  ]
})
export class UsersModule {

}
