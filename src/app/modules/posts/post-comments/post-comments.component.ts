import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
  constructor() { }

  @Input() postId?: number;

  ngOnInit(): void {
  }

}
