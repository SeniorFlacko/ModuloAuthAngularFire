import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { User } from '../models/user';


@Injectable({
    providedIn: 'root'
})
export class UserFirestore extends FirestoreService<User> {

    protected basePath: string = 'users';

}