
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import{RegisterComponent} from './features/register/register.component'
const routes: Routes = [
 { path : 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {path : 'register', component:RegisterComponent},
  { path : '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
