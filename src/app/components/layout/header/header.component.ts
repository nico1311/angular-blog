import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {

  }

  private clickedInside = false;
  public mobileMenuOpen = false;

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
