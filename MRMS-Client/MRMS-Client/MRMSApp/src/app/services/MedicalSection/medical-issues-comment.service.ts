import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalIssuesComment } from '../../models/MedicalSection/medical-issues-comment';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class MedicalIssuesCommentService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<MedicalIssuesComment[]> {
    return this.http.get<MedicalIssuesComment[]>(`${apiUrl}/MedicalIssuesComment`);
  }

  getById(id: number): Observable<MedicalIssuesComment> {
    return this.http.get<MedicalIssuesComment>(`${apiUrl}/MedicalIssuesComment/${id}`);
  }
  insert(data: MedicalIssuesComment): Observable<MedicalIssuesComment> {
    return this.http.post<MedicalIssuesComment>(`${apiUrl}/MedicalIssuesComment`, data);
  }
  update(data: MedicalIssuesComment): Observable<any> {
    return this.http.put<any>(`${apiUrl}/MedicalIssuesComment/${data.medicalIssueCommentId}`, data);
  }
  delete(data: MedicalIssuesComment): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/MedicalIssuesComment/${data.medicalIssueCommentId}`);
  }
}
