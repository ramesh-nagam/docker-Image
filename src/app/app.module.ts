import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyComponentComponent } from './DCAR_Algo_Serve/my-component/my-component.component';
import { RegistrationComponentComponent } from './DCAR_Algo_Serve/registration-component/registration-component.component';
import { LoginComponentComponent } from './DCAR_Algo_Serve/login-component/login-component.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';
import { MyMaterialModule } from './material';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes:Routes =[
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
       
     
    ]
@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    RegistrationComponentComponent,

    LoginComponentComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
    RouterModule.forRoot(routes),
  ],
  exports: [MatButtonModule,MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
