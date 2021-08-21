import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './posts-routing.module';

import { SharedModule } from '../../components/shared/shared.module';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    PostCommentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  exports: [
    PostListComponent
  ]
})
export class PostsModule {

}
