import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../../models/shared/app-constants';
import { Visa } from '../../models/visaSection/visa';

@Injectable({
  providedIn: 'root'
})
export class VisaService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<Visa[]> {
    return this.http.get<Visa[]>(`${apiUrl}/Visas`);
  }

  getById(id: number): Observable<Visa> {
    return this.http.get<Visa>(`${apiUrl}/Visas/${id}`);
  }
  insert(data: Visa): Observable<Visa> {
    return this.http.post<Visa>(`${apiUrl}/Visas`, data);
  }
  update(data: Visa): Observable<any> {
    return this.http.put<any>(`${apiUrl}/Visas/${data.visaId}`, data);
  }
  delete(data: Visa): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/Visas/${data.visaId}`);
  }

}
