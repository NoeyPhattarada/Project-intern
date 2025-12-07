import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}

const FOOTER: FooterItem[] = [
  {
    image: 'assets/images/x.svg',
  },
  {
    image: 'assets/images/facebook.svg',
  },
  {
    image: 'assets/images/instagram.svg',

  },
];

interface FooterItem {
  image: string;
}