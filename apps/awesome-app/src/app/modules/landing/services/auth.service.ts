import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(body: {
    firstName: string;
    lastName: string;
    password: string;
    repeatPassword: string;
    email: string;
  }): Observable<any> {
    return this.httpClient.post(
      `${environment.apiBaseUrl}/auth/register`,
      body
    );
  }

  login(body: { password: string; email: string }): Observable<any> {
    return this.httpClient.post(`${environment.apiBaseUrl}/auth/login`, body);
  }
}
