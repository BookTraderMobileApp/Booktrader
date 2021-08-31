import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

export interface User{
    uid:string;
    email:string;
}

export interface Message{
    createdAt: firebase.firestore.FieldValue;
    id: string;  
    from: string;
    msg: string;
    fromName:string;
    myMsg:boolean;
}

@Injectable({
    providedIn: 'root'
})
export class chatService{
    cuurentUser: User =  null;



    constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
        this.afAuth.auth.onAuthStateChanged(user => {
            console.log('Changed: ', user);
            this.cuurentUser = user;

        });  
    }

    async signUp({ email, password }) {
        const credential = await this.afAuth.auth.createUserWithEmailAndPassword(
            email,
            password, 
        );

        console.log('result:', credential);
        const uid =  credential.user.uid;

        return this.afs.doc(
            'users/${uid}'
        ).set({
            uid,
            email: credential.user.email 
        });

    }

    signIn({ email, password }) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);

    }

    signOut() {
        return this.afAuth.auth.signOut();
        
    }



}