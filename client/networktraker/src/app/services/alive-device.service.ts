import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Device } from '../classes/Device';
import { Observable , throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Traffic} from '../classes/Traffic';
@Injectable({
  providedIn: 'root'
})
export class AliveDeviceService {

  constructor(private http: HttpClient) { }
  getAliveDevice(): Observable<Device[]> {
    return this.http.get<Device[]>( 'http://172.16.16.102:8000/api/devices')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
