import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
const server = environment.server;


@Injectable({
  providedIn: 'root'
})
export class JobListingService {

  constructor(private http: HttpClient) { }
  getCompanies(): Observable<any>{
    return this.http.get<Company[]>(server + '/companies');
  }
}
export interface Company{
  name: string;
  primary_phone: string;
  primary_email: string;
}