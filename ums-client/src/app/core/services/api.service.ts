import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string, params?: any, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(`${environment.api}/${url}`, { params, headers });
  }

  public post<T>(url: String, payload?: any, options?: any): Observable<any> {
    return this.http.post<T>(`${environment.api}/${url}`, payload, options);
  }

  public delete(url: string, params?: any): Observable<any> {
    return this.http.delete(`${environment.api}/${url}`, { params });
  }
}
