
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  LoggedUserMenu: any = [] = [];
  menuList: any = {
    Customer: [
      { path: 'approved-applications', Title: 'Approved-Applications' },
      { path: 'my-application', Title: 'My-Applications' }
    ],
    Bank_Emploayee: [
      { path: 'loan-application', Title: 'Loan-Application' },
      { path: 'Customer', Title: 'Customer' },
      { path: 'approvals', Title: 'Approvals' },
      { path: 'change-password', Title: 'Change-Password' }

    ]
  }

  ngOnInit(): void {
    debugger
    let LoggedData = localStorage.getItem('userApp')
    if (LoggedData) {
      const LoggedUser = JSON.parse(LoggedData)
      this.LoggedUserMenu = this.menuList[LoggedUser.role];

    }
  }
}