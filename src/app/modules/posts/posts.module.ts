import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './posts-routing.module';

import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [
    PostListComponent
  ]
})
export class PostsModule {

}
