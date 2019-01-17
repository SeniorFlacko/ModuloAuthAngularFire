import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private subject: BehaviorSubject<User> = new BehaviorSubject(null);
  
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

  public saveUser(user: User) {
    this.subject.next(user);
  }

public getSavedUser(): BehaviorSubject<User> {
    return this.subject;
}


public updateEmail(user: User, newEmail: string): void {
    // this.fireDb.object(`${USERS_CHILD}/'${user.uid}`).update({email: newEmail});
    this.userDoc = this.userCollection.doc(user.uid);
    this.userDoc.update({email: newEmail});
    this.saveUser(user);
}

public updateMobile(user: User, mobile: string): void {
    // this.fireDb.object(`${USERS_CHILD}/'${user.uid}`).update({mobile: mobile});
    this.userDoc = this.userCollection.doc(user.uid);
    this.userDoc.update({mobile: mobile});
    this.saveUser(user);
}

public updateName(user: User, name: string): void {
    // this.fireDb.object(`${USERS_CHILD}/'${user.uid}`).update({name: name});
    this.userDoc = this.userCollection.doc(user.uid);
    this.userDoc.update({name: name});
    this.saveUser(user);
}
}
