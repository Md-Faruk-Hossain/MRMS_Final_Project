import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../../models/shared/app-constants';
import { VisaIssue } from '../../models/visaSection/visa-issue';

@Injectable({
  providedIn: 'root'
})
export class VisaIssueService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<VisaIssue[]> {
    return this.http.get<VisaIssue[]>(`${apiUrl}/VisaIssues`);
  }

  getById(id: number): Observable<VisaIssue> {
    return this.http.get<VisaIssue>(`${apiUrl}/VisaIssues/${id}`);
  }
  insert(data: VisaIssue): Observable<VisaIssue> {
    return this.http.post<VisaIssue>(`${apiUrl}/VisaIssues`, data);
  }
  update(data: VisaIssue): Observable<any> {
    return this.http.put<any>(`${apiUrl}/VisaIssues`, data);
  }
  delete(data: VisaIssue): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/VisaIssues/${data.visaIssueId}`);
  }
}
