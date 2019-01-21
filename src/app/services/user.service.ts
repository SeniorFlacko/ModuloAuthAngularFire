import { Injectable } from '@angular/core';
import { UserFirestore } from './user.firestore';
import { UserPageStore } from './user-page.store';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private firestore: UserFirestore,
    private store: UserPageStore 
    ) 
  {

    this.firestore.collection$()
      .pipe(
        tap(users =>{
          this.store.patch({
            loading: false,
            users,
          },`users collection subscription`)
        })
      ).subscribe()


  }


  create(user: User){
    this.store.patch({loading:true, users: [], formStatus: 'Salvando...'}, "Creando Usuario");

    return this.firestore.create(user)
            .then(_ =>{
              this.store.patch({formStatus: 'Salvado!'}, "Usuario creado satisfactoriamente")
              setTimeout(() => this.store.patch({formStatus: ''},'Crear usuario reset FormStatus'), 2000);
            }).catch(err =>{
              this.store.patch({loading: false, formStatus:'Ocurrio un error'}, 'Crear Empleado Error')
            })
  }

}
