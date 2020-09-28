import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { SecureStoreService } from '../../services/storageL.service';
import { AlertController, ToastController } from '@ionic/angular';
import { ComodoService } from '../../services/comodo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-comodo',
  templateUrl: './new-comodo.page.html',
  styleUrls: ['./new-comodo.page.scss'],
})
export class NewComodoPage implements OnInit {

  comodoCreate: FormGroup;
  isSubmitted = false;
  token = null;
  userID: any;
  user = null;
  idUser = null;

  constructor(public toastController: ToastController, private auth: AuthenticationService, private alertCtrl: AlertController, private storage: SecureStoreService, public formBuilder: FormBuilder, private apiService: ComodoService, private router: Router) {
  }

  async ngOnInit() {
    this.comodoCreate = this.formBuilder.group({
      nomeCom: ['', [Validators.required]],
      // isActive: [true, [Validators.required]],
      // issync: [true, [Validators.required]]
    });
    this.token = await this.storage.getToken();
    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
    console.log(this.token);
    this.user = this.auth.getUser();
    console.log(this.user);
    this.idUser = await this.storage.getIdUser();
    console.log(this.idUser);
    this.userID = this.user ? this.user.id : this.idUser[0].idUser;
    // this.userID = '5f0a2a4fa1d84f17a891d5a9';
  }

  async ionViewWillEnter() {
    this.token = await this.storage.getToken();
    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
    console.log(this.token);
    this.user = this.auth.getUser();
    console.log(this.user);
    this.idUser = await this.storage.getIdUser();
    console.log(this.idUser);
    this.userID = this.user ? this.user.id : this.idUser[0].idUser;
    // this.userID = '5f0a2a4fa1d84f17a891d5a9';
  }

  createCom() {
    this.isSubmitted = true;
    if (!this.comodoCreate.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.comodoCreate.value);
      let comodo = {
        userID: this.userID,
        nomeComodo: this.comodoCreate.value.nomeCom,
        tempComodo: '',
        umiComodoF: '',
        ajustTempComodo: '',
        statusLuzComodo: false,
        statusTomadaComodo: false,
        statusJanelaComodo: false,
        statusPortaComodo: false,
        statusPresencaComodo: false,
        statusArCondiconado: false,
        isActive: true,
        isFavorite: false,
        issync: true,
      };

      this.apiService.postComodoMongoDB(comodo, this.token[0].token).subscribe( async (response) => {
        console.log(response);
        this.router.navigateByUrl('/members');
      }, async (err) => {
        console.log(err);
        let erro = err.message;
        let errors = err.error.errors;
        let messages = err.error.message;
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
        //let error = err.error ? err.error.message : err.message;
        const alert = await this.alertCtrl.create({
          header: 'Falha em criar o comodo',
          message: 'Erro: ' + teste,
          buttons: ['OK']
        });
        await alert.present();
      });
    }
  }

  get errorControl() {
    return this.comodoCreate.controls;
  }

}
