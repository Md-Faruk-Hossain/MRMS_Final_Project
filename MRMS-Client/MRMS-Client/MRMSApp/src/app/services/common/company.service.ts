import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../models/common/company';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<Company[]> {
    return this.http.get<Company[]>(`${apiUrl}/Companies`);
  }

  getById(id: number): Observable<Company> {
    return this.http.get<Company>(`${apiUrl}/Companies/${id}`);
  }
  insert(data: Company): Observable<Company> {
    return this.http.post<Company>(`${apiUrl}/Companies`, data);
  }
  update(data: Company): Observable<any> {
    return this.http.put<any>(`${apiUrl}/Companies`, data);
  }
  delete(data: Company): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/Companies/${data.companyId}`);
  }
}
