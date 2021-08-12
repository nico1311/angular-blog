import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(location: Location, router: Router) {
    router.events.subscribe(() => {
      const path = location.path();
      if (path !== this.currentRoute) {
        this.currentRoute = path;
        if (this.mobileMenuOpen) this.mobileMenuOpen = false;
      }
    });
  }

  public currentRoute: string = '';
  public mobileMenuOpen = false;
  private clickedInside = false;

  ngOnInit(): void {

  }

  toggleMobileMenu () {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  @HostListener('click')
  clickInside() {
    this.clickedInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.clickedInside && this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
    }
    this.clickedInside = false;
  }
}
