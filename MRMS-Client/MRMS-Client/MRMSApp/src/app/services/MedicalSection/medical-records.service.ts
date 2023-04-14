import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalRecord } from '../../models/MedicalSection/medical-record';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordsService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(`${apiUrl}/MedicalRecord`);
  }

  getById(id: number): Observable<MedicalRecord> {
    return this.http.get<MedicalRecord>(`${apiUrl}/MedicalRecord/${id}`);
  }
  insert(data: MedicalRecord): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>(`${apiUrl}/MedicalRecord`, data);
  }
  update(data: MedicalRecord): Observable<any> {
    return this.http.put<any>(`${apiUrl}/MedicalRecord/${data.medicalRecordId}`, data);
  }
  delete(data: MedicalRecord): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/MedicalRecord/${data.medicalRecordId}`);
  }
}
