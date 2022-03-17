import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/posts';
  
  constructor(private http: HttpClient) {
    
   }
  proceedLogin(userCred:any) {
    return this.http.post(this.url,userCred)
    
  }
}
