import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { sha512 } from 'js-sha512';
import { AuthenticationService } from '../../services/authentication.service'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SecureStoreService, IdUser } from '../../services/storageL.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  logIn: any;

  constructor(public formBuilder: FormBuilder, private auth: AuthenticationService, private router: Router, private alertCtrl: AlertController, private storage: SecureStoreService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usernameLogin: ['', [Validators.required]],
      passwdLogin: ['', [Validators.required]]
    });
  }

  login(){
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.loginForm.value);
      let hash = sha512.create().update(this.loginForm.value.passwdLogin).hex();
      this.logIn = {
        username: this.loginForm.value.usernameLogin,
        senha: hash
      };

      console.log(this.logIn);
      this.auth.login(this.logIn.username, this.logIn.senha).subscribe(async res => {
        console.log(res);
        if (res) {
          console.log(res[0].token.idUser);
          let idu: IdUser = {
            idUser: res[0].idUser
          }
          this.storage.addOneIdUser(idu);
          this.router.navigateByUrl('/members');
        } else {
          const alert = await this.alertCtrl.create({
            header: 'Falha no Login',
            message: 'Falha no Login',
            buttons: ['OK']
          });
          await alert.present();
        }
      }, async err => {
        console.log(err);
        let error = err.error ? err.error.message : err.message;
        const alert = await this.alertCtrl.create({
          header: 'Login Failed',
          message: 'Falha no Login: ' + error,
          buttons: ['OK']
        });
        await alert.present();
      });

      // console.log('teste');
    }
  }

  get errorControl() {
    return this.loginForm.controls;
  }

}
