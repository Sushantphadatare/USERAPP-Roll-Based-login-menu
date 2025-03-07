import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoanApplicationComponent } from './home/Bank_Employe/loan-application/loan-application.component';
import { CustomerComponent } from './home/Bank_Employe/customer/customer.component';
import { ApprovalsComponent } from './home/Bank_Employe/approvals/approvals.component';
import { ApprovedApplicatioComponent } from './Customer/approved-applicatio/approved-applicatio.component';
import { MyApplicationComponent } from './Customer/my-application/my-application.component';
import { ChangePasswordComponent } from './home/Bank_Employe/change-password/change-password.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'

    },
    {
        path:'login',
        component
        :LoginComponent
    }
    ,
    {
        path:'Home',
        component:HomeComponent,      
    },
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path:'loan-application',
                component:LoanApplicationComponent,
            },
            {
                path:'Customer',
                component:CustomerComponent
            },
            {
                path:'approvals',
                component:ApprovalsComponent
            },
            {
                path:'approved-applications',
                component:ApprovedApplicatioComponent
            },
            {
                path:'my-application',
                component:MyApplicationComponent
            },
            {
                path:'change-password',
                component:ChangePasswordComponent
            }
        ]
        
    },
   

    
];
