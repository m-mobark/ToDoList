import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;

  constructor(
    private _userService: UserService,
    private _router:Router
  ) {}

  ngOnInit() {}

  onRegister() {

    if (!this.name || !this.email || !this.password) {
      return false;
    }

    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    this._userService.createAccount(user).subscribe(
      resp => {
        if(!resp.success) {
          return false;
        }
        return this._router.navigate(['/home']);
      }
    );
  }

}
