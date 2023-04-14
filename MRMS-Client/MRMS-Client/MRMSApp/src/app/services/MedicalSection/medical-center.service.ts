import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalCenter } from '../../models/MedicalSection/medical-center';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class MedicalCenterService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<MedicalCenter[]> {
    return this.http.get<MedicalCenter[]>(`${apiUrl}/MedicalCenters`);
  }

  getById(id: number): Observable<MedicalCenter> {
    return this.http.get<MedicalCenter>(`${apiUrl}/MedicalCenters/${id}`);
  }
  insert(data: MedicalCenter): Observable<MedicalCenter> {
    return this.http.post<MedicalCenter>(`${apiUrl}/MedicalCenters`, data);
  }
  update(data: MedicalCenter): Observable<any> {
    return this.http.put<any>(`${apiUrl}/MedicalCenters/${data.medicalCenterId}`, data);
  }
  delete(data: MedicalCenter): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/MedicalCenters/${data.medicalCenterId}`);
  }
}
