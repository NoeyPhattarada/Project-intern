import { Component } from '@angular/core';

@Component({
  selector: 'app-details-table',
  imports: [],
  templateUrl: './details-table.html',
  styleUrl: './details-table.css',
})
export class DetailsTable {
  readonly Coverage = Coverage;
  readonly DetailsRow = DetailsRow;
}
const Coverage: CoverageItem[] = [
  {
    detail: 'การเสียชีวิต การสูญเสียอวัยวะ สายตา หรือทุพพลภาพถาวร (อ.บ.2)'
  },
  {
    detail: 'ผลประโยชน์อุบัติเหตุชั่วคราว'
  },
  {
    detail: 'การบาดเจ็บหรือโดยการของจักรยานยนต์'
  },
  {
    detail: 'การถูกฆาตกรรมหรือถูกทำร้ายร่างกาย'
  },
]

const DetailsRow: DetailsRowItem[] = [
  {
    title: 'ค่ารักษาพยาบาลจากอุบัติเหตุ (สูงสุดไม่เกิน 365 วัน)',
    plan: [200, 600, 1000, 2000]
  },
  {
    title: 'ค่ารักษาพยาบาลผู้ป่วยนอก (สูงสุดไม่เกิน 15 วัน)',
    plan: [200, 600, 1000, 2000]
  },
];

interface CoverageItem {
  detail: string;
}


interface DetailsRowItem {
  title: string;
  plan: number[];
}
