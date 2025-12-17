import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Milk } from 'lucide-angular';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  private readonly _httpClient = inject(HttpClient);

  getAllProduct() {
    return this._httpClient.get('https://api-dev.riderinsure.co.th/online-insure/public/health');
  }

  getHealthCount(params: string) {
    return this._httpClient.get(
      'https://api-dev.riderinsure.co.th/online-insure/public/api/v1/insurance/health/count?' +
        params
    );
  }

  postHealthCount(body: any) {
    return this._httpClient.post('https://dummyjson.com/docs/todos', body);
  }
}
