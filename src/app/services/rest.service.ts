import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RestService {

  url = 'https://contoh.gamelabnetwork.com';

  constructor(private http: HttpClient) {}

  get(route, header){
    return this.http.get<any>(this.url + route, header);
  }

  post(route, body, header){
    return this.http.post<any>(this.url + route, body, header);
  }

  put(route, body, header){
    return this.http.put<any>(this.url + route, body, header);
  }

  delete(route, header){
    return this.http.delete<any>(this.url + route, header);
  }
}
