import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  private readonly _httpClient = inject(HttpClient);

  getAllProduct() {
    return this._httpClient.get('https://api-dev.riderinsure.co.th/online-insure/public/health');
  }

  getHelthCount(params: string) {
    return this._httpClient.get(
      'https://api-dev.riderinsure.co.th/online-insure/public/api/v1/insurance/health/count?' +
        params
    );
  }

  postHelthCount(body: any) {
    return this._httpClient.post('https://dummyjson.com/docs/todos', body);
  }
}
