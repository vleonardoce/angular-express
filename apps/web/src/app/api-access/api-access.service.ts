import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService {

  API_URL = 'http://localhost:3333/api';

  constructor(private http: HttpClient) { }

  get(number: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}/${number}`);
  }
}
