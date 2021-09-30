import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [
  {
    path: '',component: AccountsComponent,
    children:[
      {
        path: '', component: LoginComponent,
      },
      {
        path: "signup", component: SignupFormComponent
      },
      {
        path: "forgetPassword", component: ForgetPasswordComponent
      },
      {
        path: "profile", component: MyprofileComponent
      }
    ]
  },
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
