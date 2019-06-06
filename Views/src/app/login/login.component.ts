import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    //private _userService :UserService,
    
    //private _router :Router
  ) { }

  ngOnInit() {
  }

}


//   constructor(
//     private _userService :UserService,
//     private _router :Router
//   ) { }

//   ngOnInit() {}

//   onLogin(){

//     if(!this.email || !this.password) {
//       return false;
//     }

//     const user = {
//       email: this.email,
//       password: this.password
//     }

//     this._userService.auth(user).subscribe(
//       resp => {
//         if (!resp.success) {
//           return false;
//         }

//         this._userService.saveUserDate(resp.token, resp.user);
//         this._router.navigate(['/main']);
//       }
//     );

//   }
// }

