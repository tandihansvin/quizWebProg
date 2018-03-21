import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class CrudService {

  public data: any = {};

  constructor(private rest: RestService, private router: Router) { }

  load(route, next){
    const header = {headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })};
    this.rest.get(route, header).subscribe(res =>{
      this.data = res;
      if(this.data.success){this.router.navigate([next]);}
      else {window.alert('failed to access');}
    });
  }

  create(route, body){
    const header = {headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })};
    this.rest.post(route, body, header).subscribe(res =>{
      this.data = res;
      window.alert('success ' + this.data.success);
    });
  }

  update(route, body){
    const header = {headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })};
    this.rest.put(route, body, header).subscribe(res =>{
      this.data = res;
      window.alert('success ' + this.data.success);
    });
  }

  delete(route){
    const header = {headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })};
    this.rest.delete(route, header).subscribe(res =>{
      this.data = res;
      window.alert('success ' + this.data.success);
    });
  }
}
