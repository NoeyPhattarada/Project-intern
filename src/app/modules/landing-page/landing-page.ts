import { Component } from '@angular/core';
import { CardComponent } from './card/card';
import { HomePage } from './home-page/home-page';

@Component({
  selector: 'app-landing-page',
  imports: [CardComponent,HomePage],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

}
