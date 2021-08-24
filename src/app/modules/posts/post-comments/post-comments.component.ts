import { Component, Input, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { PostsService } from '../posts.service';
import type { Comment } from '../post';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
  constructor(public postsService: PostsService) { }

  public faChevronDown = faChevronDown;
  public faChevronUp = faChevronUp;

  @Input() postId!: number;
  public isOpen: boolean = false;

  public comments: Comment[] = [];

  ngOnInit(): void {
    this.postsService.getPostComments(this.postId).subscribe((data) => {
      this.comments = data;
    });
  }

  toggleComments(): void {
    this.isOpen = !this.isOpen;
  }
}
