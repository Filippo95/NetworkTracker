import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Traffic } from '../classes/Traffic';
import { Observable , throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TrafficServiceService {

  constructor(private http: HttpClient) { }

  getTraffic(): Observable<Traffic[]> {
    return this.http.get<Traffic[]>( 'http://172.16.16.102:8000/api/comunication')
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
