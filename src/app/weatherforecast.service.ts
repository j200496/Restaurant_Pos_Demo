import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from './environments.develoments';

@Injectable({
  providedIn: 'root',
})
export class WeatherforecastService {
  constructor() {}
  private http = inject(HttpClient);
  private urlbase = environment.ApiUrl + '/WeatherForecast';

  public ObtenerClima() {
    return this.http.get<any>(this.urlbase);
  }
}
