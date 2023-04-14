import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalIssues } from '../../models/MedicalSection/medical-issues';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class MedicalIssuesService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<MedicalIssues[]> {
    return this.http.get<MedicalIssues[]>(`${apiUrl}/MedicalIssues`);
  }

  getById(id: number): Observable<MedicalIssues> {
    return this.http.get<MedicalIssues>(`${apiUrl}/MedicalIssues/${id}`);
  }
  insert(data: MedicalIssues): Observable<MedicalIssues> {
    return this.http.post<MedicalIssues>(`${apiUrl}/MedicalIssues`, data);
  }
  update(data: MedicalIssues): Observable<any> {
    return this.http.put<any>(`${apiUrl}/MedicalIssues/${data.medicalIssueId}`, data);
  }
  delete(data: MedicalIssues): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/MedicalIssues/${data.medicalIssueId}`);
  }
}
