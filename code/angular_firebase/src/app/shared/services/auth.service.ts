import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from './user.model';

import { Observable, of } from 'rxjs';
import { switchMap, first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

//    user$: Observable<User>;
    user$: Observable<any>;
    // userData: any;

  constructor(
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private afs: AngularFirestore,  // Inject FIrestore service
    private router: Router,
    public ngZone: NgZone          // NgZone service to remove outside scope warning
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  getUser() {
    return this.user$.pipe(first()).toPromise();
  }

  // Sign in with email/password
  async SignIn(email, password) {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
      });
    // const token = await response.user.getIdToken();
    console.log('THIS IS RESPONSE', response);
    // console.log('THIS IS TOKEN', token);
    this.router.navigate(['user']);
    console.log('finish login and route to preference')
    // this.SetUserData(response.user)
  }

  // Sign up with email/password
  async SignUp(email, password) {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.SetUserData(response.user)
        console.log('THIS IS RESPONSE', response);
        this.router.navigate(['new-user']);
      })
      .catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
      });
    // const token = await response.user.getIdToken();
    // console.log('THIS IS RESPONSE', response);
    // console.log('THIS IS TOKEN', token);
    // this.router.navigate(['new-user']);
    // console.log('finish login and route to preference')
    // this.SetUserData(response.user)
  }

  // Sign up with Facebook
  async FacebookAuth() {
    // return new auth.FacebookAuthProvider();
    const provider = new firebase.auth.FacebookAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    this.router.navigate(['new-user']);
    console.log(credential.user);
    return this.SetUserData(credential.user);
  }

    // Sign in with Facebook
  async FacebookAuthLogin() {
    // return new auth.FacebookAuthProvider();
    const provider = new firebase.auth.FacebookAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    this.router.navigate(['user']);
    // return this.SetUserData(credential.user);
  }

  // Update data in Firestore
  private SetUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      profile: {
        profileImageUrl: user.photoURL,
        name: user.displayName
      },
      preference: {}
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  async SignOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['']);
  }
}
