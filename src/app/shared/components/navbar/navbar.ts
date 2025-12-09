import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly NAVBAR = NAVBAR;
  readonly Menu = Menu;
  readonly X = X;

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu() {
    this.isMenuOpen = false;
  }
}

const NAVBAR: NavbarItem[] = [
  {
    label: 'On Sale',
    route: '/on-sale',
  },
  {
    label: 'New Arrivals',
    route: '/new-arrivals',
  },
  {
    label: 'Brands',
    route: '/brands',
  },
];

interface NavbarItem {
  label: string;
  route: string;
}
