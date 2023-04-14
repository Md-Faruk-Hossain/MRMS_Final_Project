import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandIssue } from '../../models/demandSection/demand-issue';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class DemandIssueService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<DemandIssue[]> {
    return this.http.get<DemandIssue[]>(`${apiUrl}/DemandIssue`);
  }

  getById(id: number): Observable<DemandIssue> {
    return this.http.get<DemandIssue>(`${apiUrl}/DemandIssue/${id}`);
  }
  insert(data: DemandIssue): Observable<DemandIssue> {
    return this.http.post<DemandIssue>(`${apiUrl}/DemandIssue`, data);
  }
  update(data: DemandIssue): Observable<any> {
    return this.http.put<any>(`${apiUrl}/DemandIssue/${data.demandIssueId}`, data);
  }
  delete(data: DemandIssue): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/DemandIssue/${data.demandIssueId}`);
  }
}
