import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trade } from '../../models/demandSection/trade';
import { apiUrl } from '../../models/shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(
    private http: HttpClient
  ) { }
  get(): Observable<Trade[]> {
    return this.http.get<Trade[]>(`${apiUrl}/Trades`);
  }

  getById(id: number): Observable<Trade> {
    return this.http.get<Trade>(`${apiUrl}/Trades/${id}`);
  }
  insert(data: Trade): Observable<Trade> {
    return this.http.post<Trade>(`${apiUrl}/Trades`, data);
  }
  update(data: Trade): Observable<any> {
    return this.http.put<any>(`${apiUrl}/Trades`, data);
  }
  delete(data: Trade): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/Trades/${data.tradeId}`);
  }
}
