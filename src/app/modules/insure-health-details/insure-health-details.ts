import { Component } from '@angular/core';
import { DetailsCard } from './details-card/details-card';

@Component({
  selector: 'app-insure-health-details',
  standalone: true,
  imports: [DetailsCard],
  templateUrl: './insure-health-details.html',
  styleUrl: './insure-health-details.css',
})
export class InsureHealthDetails {

}
