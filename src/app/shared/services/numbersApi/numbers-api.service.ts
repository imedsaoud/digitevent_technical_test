import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NumbersApi } from '@app/shared/interfaces';

interface NumbersApiResponse {
  numberInfo: string;
}

@Injectable({
  providedIn: 'root'
})

export class NumbersApiService {

  constructor(private http: HttpClient) { }
  
  getNumberInfo(number: string): Observable<NumbersApi> {  
    return this.http.get<NumbersApiResponse>(`http://localhost:4040/api/date?date=${number}`)
  }
}
