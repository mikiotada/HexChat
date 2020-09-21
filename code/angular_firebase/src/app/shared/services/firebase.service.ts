import {Injectable} from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';
import {first, switchMap} from 'rxjs/operators';
import {Test} from './user.model';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
    providedIn: 'root'
})


export class FirebaseService {

    test$: Observable<any>;

    constructor(public db: AngularFirestore,
                private afAuth: AngularFireAuth) {
        this.test$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.db.doc<Test>(`group/1YsYSkVW2lZGUXynAI8l`).valueChanges();
                } else {
                    return of(null);
                }
            })
        );

    }


    async getTest() {
        const tags = await this.test$.pipe(first()).toPromise()
            .then(ams => ams.tags);
        const tags1 = Object.keys(tags.background);
        const tags2 = Object.keys(tags.career);
        const tags3 = Object.keys(tags.interest);
        console.log({tags1, tags2, tags3});
        return {tags1, tags2, tags3};

    }

    createUser(value, imageurl, uid) {
        return this.db.collection('users').doc(uid).update({
            profile: {
                name: value.name,
                gender: value.gender,
                country: value.country,
                age: parseInt(value.age),
                profileImageUrl: imageurl
            },
            preference: {}
        }).then(function () {
            console.log('User profile created');
        });

    }

    createUserFacebook(value, name, imageurl, uid) {
        console.log(value.countries);
        return this.db.collection('users').doc(uid).update({

            profile: {
                name: value.userAppName,
                gender: value.gender,
                // nameToSearch: value.name.toLowerCase(),
                userFbName: name,
                age: parseInt(value.age),
                profileImageUrl: imageurl,
                country: value.countries,
                languages: value.languages,
                interests: value.interests,
                jobTitle: value.jobTitle,
                industry: value.industry,
                school1Info: value.school1Info,
                school2Info: value.school2Info


            },
            preference: {}
        }).then(function () {

            console.log('User profile created');
        });

    }


    updateUser(userKey,value,profileImageUrl) {
        return this.db.collection('users').doc(userKey).update({
            profile: {
                name: value.userAppName,
                age: parseInt(value.age),
                gender: value.gender,
                country: value.countries,
                languages: value.languages,
                interests: value.interests,
                jobTitle: value.jobTitle,
                industry: value.industry,
                school1Info: value.school1Info,
                school2Info: value.school2Info,
                profileImageUrl: profileImageUrl
            }
        }).then(function () {
            console.log('User profile updated');
        });
        // return this.db.collection('users').doc(userKey).set(value);
    }


    updatePreference(userKey, sth, tags) {
        return this.db.collection('users').doc(userKey).update({
            preference: {
                major: sth,
                selected_tags: tags
            },
            // tslint:disable-next-line:only-arrow-functions
        });
        // return this.db.collection('users').doc(userKey).set(value);
    }

    // getTags() {
    //
    //     const groupRef = this.db.collection('group',
    //         ref => ref.orderBy('tags', 'asc'));
    //     const secondRef = this.db.collection('group').doc('1YsYSkVW2lZGUXynAI8l');
    //     // console.log('test-get', secondRef.get());
    //     return secondRef.snapshotChanges().pipe(
    //     map(doc => {
    //       console.log('payload id', doc.payload.doc.id);
    //       console.log('tryit', doc.payload.doc.data().tags);
    //       return { id: doc.payload.doc.id,
    //                ...doc.payload.doc.data() as {}
    //        };
    //     })
    //     );
    //
    // }


}
