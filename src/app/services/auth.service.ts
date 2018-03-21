import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {RestService} from './rest.service';

@Injectable()
export class AuthService {
  data: any = {};

  constructor(private res: RestService, private router: Router) {
  }

  logIn(body) {
    const header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.res.post('/api/login', body, header).subscribe(res => {
      this.data = res;
      localStorage.setItem('token', this.data.data.token);
      this.router.navigate(['/']);
    });
  }

  register(body){
    const header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.res.post('/api/register', body, header);
    this.router.navigate(['/']);
  }
}
