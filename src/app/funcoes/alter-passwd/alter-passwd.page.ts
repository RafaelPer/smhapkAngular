import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { sha512 } from 'js-sha512';
import { AuthenticationService } from '../../services/authentication.service';
import { SecureStoreService } from '../../services/storageL.service';
import { AlertController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alter-passwd',
  templateUrl: './alter-passwd.page.html',
  styleUrls: ['./alter-passwd.page.scss'],
})
export class AlterPasswdPage implements OnInit {

  alterSenha: FormGroup;
  isSubmitted = false;
  token = null;
  id: any;

  constructor(public toastController: ToastController, private auth: AuthenticationService, private alertCtrl: AlertController, private storage: SecureStoreService, private apiService: UserService, public formBuilder: FormBuilder, public activatedRoute: ActivatedRoute, public router: Router) {
  }

  async ngOnInit() {
    this.alterSenha = this.formBuilder.group({
      passwdAtual: ['', [Validators.required]],
      passwdNew: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)]],
      passwdNewConf: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)]],
    }, {validator: this.matchingPasswords.bind(this)});
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    // this.user = this.auth.getUser();
    // console.log(this.user);
    // this.idUser = await this.storage.getIdUser();
    // console.log(this.idUser);
    this.token = await this.storage.getToken();
    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
    console.log(this.token);
  }

  alterPsswd() {
    this.isSubmitted = true;
    if (!this.alterSenha.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.alterSenha.value);
      let passwdNew = sha512.create().update(this.alterSenha.value.passwdNew).hex();
      let passwdAtual = sha512.create().update(this.alterSenha.value.passwdAtual).hex();
      console.log(passwdNew);
      console.log(passwdAtual);
      this.apiService.alterPasswd(this.id, passwdNew, passwdAtual, this.token[0].token).subscribe((response) => {
        console.log(response);
        this.router.navigateByUrl('/members/smh/config');
      }, async (err) => {
        console.log(err);
        let erro = err.message;
        let errors = err.error.errors;
        let messages = err.error.messages;
        let teste = [];
        console.log(errors);
        console.log(messages);
  
        if(errors){
          for(let e of errors){
            console.log(e.message);
            teste.push(e.message);
          }
        }
  
        if(messages){
          for(let m of messages){
            console.log(m);
            teste.push(m.message);
          }
        }
  
        teste.push(erro);
        console.log(teste);
        const alert = await this.alertCtrl.create({
          header: 'Falha em atualizar a senha do usuario o usuario',
          message: 'Erro: ' + teste,
          buttons: ['OK']
        });
        await alert.present();
      });
    }
  }

  matchingPasswords(formGroup: FormGroup) {
    const { value: password } = formGroup.get('passwdNew');
    const { value: confirmPassword } = formGroup.get('passwdNewConf');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  backToConfig(){
    this.router.navigateByUrl('/members/smh/config');
  }

  get errorControl() {
    return this.alterSenha.controls;
  }

}
