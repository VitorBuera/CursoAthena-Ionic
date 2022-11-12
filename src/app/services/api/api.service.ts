import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Peixes } from '../../models/Peixes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getPeixes(): Observable<Peixes[]>{
    return this.http.get<any>(`${environment.apiBase}species`);
 }
}
