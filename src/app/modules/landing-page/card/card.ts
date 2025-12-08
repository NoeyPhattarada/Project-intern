
import { DecimalPipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [DecimalPipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})

export class CardComponent {
  readonly CARD = CARD;
}

const CARD: CardItem[] = [
  {
    title: 'ประกันสุขภาพ',
    image: 'assets/images/health.svg',
    rating: '5.0/5',
    price: 550,
    unit: '/ปี'
  },
  {
    title: 'ประกันชีวิต',
    image: 'assets/images/life.svg',
    rating: '5.0/5',
    price: 6520,
    unit: '/ปี'
  },
  {
    title: 'ประกันรถยนต์',
    image: 'assets/images/car.svg',
    rating: '5.0/5',
    price: 2120,
    unit: '/ปี'
  },
  {
    title: 'ประกันเดินทาง',
    image: 'assets/images/travel.svg',
    rating: '5.0/5',
    price: 45,
    unit: '/วัน'
  }
]

interface CardItem {
  image: string;
  title: string;
  rating: string;
  price: number;
  unit: string;

}
