import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users.service';
import type { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService
  ) {

  }

  public user?: User;

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.getUser(userId).subscribe((user) => {
      this.user = user;
    });
  }

  goBack() {
    this.location.back();
  }
}
