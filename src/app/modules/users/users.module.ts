import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './users-routing.module';

import { SharedModule } from '../../components/shared/shared.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [

    UserListComponent,
     UserDetailsComponent
  ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ],
  exports: [


    UserListComponent
  ]
})
export class UsersModule {

}
