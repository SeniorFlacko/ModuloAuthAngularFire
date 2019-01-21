import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthenticationModule } from './authentication/authentication.module';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './notfound/page-not-found.component';
import { UserModule } from './user/user.module';
import { UserPageStore } from './services/user-page.store';
import { UserFirestore } from './services/user.firestore';
import { UsersService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    UserModule,
    AuthenticationModule,
    AppRoutingModule,
  ],
  providers: [
    AngularFireAuth,
    UserPageStore,
    UserFirestore,
    UsersService
    // AngularFireDatabase,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
