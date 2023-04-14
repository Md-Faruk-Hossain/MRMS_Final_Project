import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileTypes } from '../../models/common/file-types';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class FileTypeService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<FileTypes[]> {
    return this.http.get<FileTypes[]>(`${apiUrl}/FileTypes`);
  }

  getById(id: number): Observable<FileTypes> {
    return this.http.get<FileTypes>(`${apiUrl}/FileTypes/${id}`);
  }
  insert(data: FileTypes): Observable<FileTypes> {
    return this.http.post<FileTypes>(`${apiUrl}/FileTypes`, data);
  }
  update(data: FileTypes): Observable<any> {
    return this.http.put<any>(`${apiUrl}/FileTypes/${data.fileTypeId}`, data);
  }
  delete(data: FileTypes): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/FileTypes/${data.fileTypeId}`);
  }
}
