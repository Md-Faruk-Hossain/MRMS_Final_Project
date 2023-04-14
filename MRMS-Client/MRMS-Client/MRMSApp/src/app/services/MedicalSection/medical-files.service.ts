import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalFiles } from '../../models/MedicalSection/medical-files';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class MedicalFilesService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<MedicalFiles[]> {
    return this.http.get<MedicalFiles[]>(`${apiUrl}/MedicalFiles`);
  }

  getById(id: number): Observable<MedicalFiles> {
    return this.http.get<MedicalFiles>(`${apiUrl}/MedicalFiles/${id}`);
  }
  insert(data: MedicalFiles): Observable<MedicalFiles> {
    return this.http.post<MedicalFiles>(`${apiUrl}/MedicalFiles`, data);
  }
  update(data: MedicalFiles): Observable<any> {
    return this.http.put<any>(`${apiUrl}/MedicalFiles/${data.medicalFileId}`, data);
  }
  delete(data: MedicalFiles): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/MedicalFiles/${data.medicalFileId}`);
  }
}
