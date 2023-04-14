import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from '../../models/ApplicantSection/applicant';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(`${apiUrl}/Applicants`);
  }

  getById(id: number): Observable<Applicant> {
    return this.http.get<Applicant>(`${apiUrl}/Applicants/${id}`);
  }
  insert(data: FormData): Observable<Applicant> {
    return this.http.post<Applicant>(`${apiUrl}/Applicants`, data);
  }
  update(data: FormData): Observable<any> {
    return this.http.put<any>(`${apiUrl}/Applicants`, data);
  }
  delete(data: Applicant): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/Applicants/${data.applicantId}`);
  }
}
