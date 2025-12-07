import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    readonly FOOTER = FOOTER;

}

const FOOTER: FooterItem[] = [
  {
    image: 'assets/images/x.svg',
    link: '/x',
  },
  {
    image: 'assets/images/facebook.svg',
    link: '/facebook',
  },
  {
    image: 'assets/images/instagram.svg',
    link: '/instagram',
  },
  {
    image: 'assets/images/github.svg',
    link: '/github',
  },


];

interface FooterItem {
  image: string;
  link:string;
}