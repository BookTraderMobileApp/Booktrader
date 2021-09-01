import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { chatService } from 'src/app/services/chat.service';
import { Platform } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook/ngx';

@Component({  
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;
  providerFb: firebase.auth.FacebookAuthProvider;
  credentialForm: FormGroup;


  constructor(private fb: FormBuilder,
    private router : Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private chatService: chatService,
    public afDB: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private fbk: Facebook,
    public platform: Platform) {
    this.providerFb = new firebase.auth.FacebookAuthProvider();
     }

  ngOnInit() {
    this.credentialForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }

  async signUp() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.chatService.signUp(this.credentialForm.value).then (user => {
      loading.dismiss();
      this.router.navigateByUrl('/tabs',{ replaceUrl: true});
    }, async err => {
      loading.dismiss();
      const alert = await this.alertController.create({
        header:'Sign up failed',
        message: err.message,
        buttons:['OK']
      });

      await alert.present();

    }); 
  }

  async signIn() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.chatService
      .signIn(this.credentialForm.value)
      .then(
        (res) => {
          loading.dismiss();
          this.router.navigateByUrl('/tabs',{ replaceUrl: true});
        },
        async (err) =>{
          loading.dismiss();
          const alert = await this.alertController.create({
            header: ':(',
            message: err.message,
            buttons: ['OK'],
          });
          await alert.present(); 
        }

      );
}

signOut(){
  this.chatService.signOut()
}



get email() {
  return this.credentialForm.get('email');
}

get password() {
  return this.credentialForm.get('password');
}

facebookLogin() {
  if(this.platform.is('cordova')) {
    console.log('platform: cordova');
    this.facebookCordova();
  } else{
    console.log('platform: web');
    this.facebookWeb();
  }

}

facebookCordova() {
  this.fbk.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
      firebase.auth().signInWithCredential(facebookCredential)
      .then((success) => {
          console.log('Info Facebook: ' + JSON.stringify(success));
      }).catch((error) => {
          console.log('Erreur: ' + JSON.stringify(error));
      });
  }).catch((error) => { console.log(error); });
}

facebookWeb() {
  this.afAuth.auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((success) => {
      console.log('Info Facebook: ' + JSON.stringify(success));
    }).catch((error) => {
      console.log('Erreur: ' + JSON.stringify(error));
    });
}





}
