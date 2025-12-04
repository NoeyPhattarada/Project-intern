import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-details-card',
  imports: [RouterLink],
  templateUrl: './details-card.html',
  styleUrl: './details-card.css',
})
export class DetailsCard {
  readonly CardDetail = CardDetail;
}

const CardDetail: CardItem[] = [
  {
    imageUrl: 'assets/images/insure-card01.svg',
    label: 'เบี้ยประกันที่เป็นมิตร',
    details: 'เบี้ยประกันเริ่มต้นเพียง 500 บาท ต่อปี',
  },
  {
    imageUrl: 'assets/images/insure-card02.svg',
    label: 'อายุเท่าไหร่ก็เบาใจได้',
    details: 'รับประกันตั้งแต่ อายุ 20-65 ปี ต่ออายุได้ถึง 70 ปี',
  },
  {
    imageUrl: 'assets/images/insure-card03.svg',
    label: 'คุ้มครองโรคร้าย',
    details: 'คุ้มครองมะเร็งทุกระยะ และ โรคร้ายแรงสุดฮิต',
  }
];

interface CardItem {
  imageUrl: string;
  label: string;
  details: string;
}
