import { Component, Input, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
  constructor() { }

  public faChevronDown = faChevronDown;
  public faChevronUp = faChevronUp;

  @Input() postId?: number;
  public isOpen: boolean = false;

  ngOnInit(): void {
  }

  toggleComments(): void {
    this.isOpen = !this.isOpen;
  }

}
