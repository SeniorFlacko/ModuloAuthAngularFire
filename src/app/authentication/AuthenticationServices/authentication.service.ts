import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  public signup(email: string, password: string): Promise<any>{
    return this.angularFireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email,password);
  }
}
