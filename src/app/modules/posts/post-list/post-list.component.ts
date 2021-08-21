import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../posts.service';
import type { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  public posts: Post[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const userId = Number(params['userId']);

      if (Number.isNaN(userId)) {
        this.postsService.getAllPosts().subscribe((data) => {
          this.posts = data;
        })
      } else {
        this.postsService.getPostsByUser(userId).subscribe((data) => {
          this.posts = data;
        });
      }
    });
  }
}
