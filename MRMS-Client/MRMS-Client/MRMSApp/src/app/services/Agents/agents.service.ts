import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../../models/Agent/agent';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${apiUrl}/Agents`);
  }

  getById(id: number): Observable<Agent> {
    return this.http.get<Agent>(`${apiUrl}/Agents/${id}`);
  }
  insert(data: Agent): Observable<Agent> {
    return this.http.post<Agent>(`${apiUrl}/Agents`, data);
  }
  update(data: Agent): Observable<any> {
    return this.http.put<any>(`${apiUrl}/Agents`, data);
  }
  delete(data: Agent): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/Agents/${data.agentId}`);
  }
}
