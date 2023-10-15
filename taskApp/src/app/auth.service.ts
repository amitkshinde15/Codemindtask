import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService : UserService) { }
   authenticatedUser;

  authenticate(email: string, password: string): Observable<boolean> {
    return this.userService.getUsers().pipe(
      map((users: any[]) => {
        const user = users.find((u) => u.email === email);

        if (user && user.password === password) {
          this.authenticatedUser = user;
          return true;
        }

        return false;
      })
    );
  }

  isLoggedIn(): boolean {
    return this.authenticatedUser !== null;
  }

  getUser(): any {
    return this.authenticatedUser;
  }

}
