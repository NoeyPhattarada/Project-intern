import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly NAVBAR = NAVBAR;
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
