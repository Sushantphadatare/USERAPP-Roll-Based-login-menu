import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  InLoginView: boolean = true;
  LoggedUserMenu: any = []=[];
  Registerdobj: any = {
    "UserId": 0,
    "Name": "",
    "EmailId": "",
    "Password": "",
    "createdDate": new Date(),
    "fullName": "",
    "MobileNo": ""
  }
  loginobj: any = {


    "userName": "",
    "password": ""


  }

  constructor(private http: HttpClient, private router: Router) { }
  onLogin( ) {
    debugger
    this.http.post('https://projectapi.gerasim.in/api/BankLoan/login', this.loginobj).subscribe(
      (res: any) => {
        console.log("res", res)
        if (res.err.result) {
          alert('Login is Successfull')
          debugger
          if(res.data.role=='Customer'){
            this.router.navigateByUrl("my-application") 
          }else{
            this.router.navigateByUrl("loan-application")
          }
          localStorage.setItem('userApp', JSON.stringify(res.data))
        }else{
          alert("password is wrong")
        }
      },
      (err) => {
        console.log("err", err)
      }
    )
  }

}
