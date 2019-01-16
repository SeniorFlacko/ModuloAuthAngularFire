import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userCollection: AngularFirestoreCollection;
  userDoc: AngularFirestoreDocument<User>;

  constructor(private db: AngularFirestore) { 
    this.userCollection = this.db.collection('users');
  }

  public addUser(user: User): void {
    this.userCollection.doc(user.uid).set(user);
  }

  public getUser(uid: string): Observable<User>{
    
    this.userDoc = this.userCollection.doc(uid);

    let item: Observable<User>;
    item = this.userDoc.valueChanges();


    return item;
  }
}
