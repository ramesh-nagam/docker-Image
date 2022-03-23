import { NgModule , APP_INITIALIZER} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { AppConfigService } from './app-config.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
}; 


@NgModule({
  declarations: [
    AppComponent,
  
    LoginComponent,
        HomeComponent,
        RegisterComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  
    HttpClientModule,
    OAuthModule.forRoot()
      ],
  exports: [],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
