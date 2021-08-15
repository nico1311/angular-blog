import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import type { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private usersService: UsersService) { }

  public users: User[] = [];

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
