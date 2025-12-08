import { Component } from '@angular/core';
import { CardComponent } from './card/card';

@Component({
  selector: 'app-landing-page',
  imports: [CardComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

}
