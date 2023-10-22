import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/userData';

  constructor(private http: HttpClient) { }

  createUser(data){
    this.http.post(this.url, data).subscribe((res)=>{
      console.log("Post data",res); 
    })
  }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  
}
