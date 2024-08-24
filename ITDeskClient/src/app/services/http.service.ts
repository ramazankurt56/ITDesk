import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { environment } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private error: ErrorService
  ) { }

  get(api: string, callBack: (res: any) => void) {
    this.http.get(`${environment.api_url}${api}`, {
      headers: {
        "Authorization": "Bearer " + this.auth.tokenString
      }
    })
      .subscribe({
        next: (res: any) => {
          callBack(res);
        },
        error: (err: HttpErrorResponse) => {
          this.error.errorHandler(err);
        }
      })
  }

  post(api: string, data: any, callBack: (res: any) => void) {
    this.http.post(`${environment.api_url}${api}`, data, {
      headers: {
        "Authorization": "Bearer " + this.auth.tokenString
      }
    })
      .subscribe({
        next: (res: any) => {
          callBack(res);
        },
        error: (err: HttpErrorResponse) => {
          this.error.errorHandler(err);
        }
      })
  }
}
