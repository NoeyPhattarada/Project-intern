import { Component } from '@angular/core';
import { DetailsCard } from './details-card/details-card';
import { DetailsTable } from './details-table/details-table';

@Component({
  selector: 'app-insure-health-details',
  standalone: true,
  imports: [DetailsCard, DetailsTable],
  templateUrl: './insure-health-details.html',
  styleUrl: './insure-health-details.css',
})
export class InsureHealthDetails {

}
