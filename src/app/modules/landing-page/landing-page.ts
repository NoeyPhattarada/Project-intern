import { Component, inject } from '@angular/core';
import { LandingPageService } from '../../shared/services/landing-page.service';
import { CardComponent } from './card/card';

@Component({
  selector: 'app-landing-page',
  imports: [CardComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  private readonly _landingPageService = inject(LandingPageService);

  constructor() {
    // example get
    const params = new URLSearchParams(window.location.search);
    this._landingPageService.getHealthCount(params.toString()).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });

    // example post
    const body = {
      type: 'LIFE',
      identifyType: 'PASSPORT_NO',
      thaiIdCardNo: 'string',
      passportNo: 'string',
      gender: 'MEN',
      title: 'string',
      firstName: 'string',
      lastName: 'string',
      tel: 'string',
      email: 'string',
      birthDate: '2025-12-10',
      address: 'string',
      addressDescription: 'string',
      contactDays: ['MON'],
      contactTime: 'MORNING',
      productCode: 'string',
      productPlanCode: 'string',
      channelCode: 'string',
      description: 'string',
      fillForm: {},
    };

    this._landingPageService.postHealthCount(body).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}
