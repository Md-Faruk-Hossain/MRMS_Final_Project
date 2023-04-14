import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../models/common/country';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<Country[]> {
    return this.http.get<Country[]>(`${apiUrl}/Countries`);
  }

  getById(id: number): Observable<Country> {
    return this.http.get<Country>(`${apiUrl}/Countries/${id}`);
  }
  insert(data: Country): Observable<Country> {
    return this.http.post<Country>(`${apiUrl}/Countries`, data);
  }
  update(data: Country): Observable<any> {
    return this.http.put<any>(`${apiUrl}/Countries/${data.countryId}`, data);
  }
  delete(data: Country): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/Countries/${data.countryId}`);
  }
}
