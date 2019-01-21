import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { UserPage } from '../models/user-page';

@Injectable({
    providedIn: 'root'
})
export class UserPageStore extends StoreService<UserPage> {
    protected store: string = 'user-page';

    constructor() {
        super({
            loading: true,
            users: [],
        })
    }
}
