import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private _http:Http) { }

  createAccount(user) {

    return this._http.post('users/register', user) // post locallhost:3000/users/register
      .map(resp => resp.json());
  }

  login(user) {
    return this._http.post('users/login', user)
      .map(resp => resp.json());
  }

  
}
