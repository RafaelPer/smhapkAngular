import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { SecureStoreService } from '../services/storageL.service';
import { AlertController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: 'config.page.html',
  styleUrls: ['config.page.scss']
})
export class ConfigPage {

  token = null;
  userID: any;
  user = null;
  idUser = null;
  us: any;

  constructor(public toastController: ToastController, private auth: AuthenticationService, private alertCtrl: AlertController, private storage: SecureStoreService, private apiService: UserService, private router: Router) {
    this.us = {};
  }

  async ngOnInit() {
    this.token = await this.storage.getToken();
    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
    console.log(this.token);
    this.user = this.auth.getUser();
    console.log(this.user);
    this.idUser = await this.storage.getIdUser();
    console.log(this.idUser);
    this.userID = this.user ? this.user.id : this.idUser[0].idUser;
    // this.userID = '5f0a2a4fa1d84f17a891d5a9';
    this.getUser(this.userID, this.token[0].token);
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
    this.getUser(this.userID, this.token[0].token);
  }

  alterUsSQLite(idMongo, user, token, username){
    this.apiService.updateByIDMUSQLite(idMongo, user, token).subscribe((response) => {
      console.log(response);
    }, async (err) => {
      console.log(err);
      let error = err.error ? err.error.message : err.message;
      const alert = await this.alertCtrl.create({
        header: 'Falha em atualizar o usuario ' + username + ' com o id: ' + idMongo + ' na base local',
        message: 'Erro: ' + error,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  insertOrUpdateUsSQLite(idUser, user, token, username){
    this.apiService.createUserSQLite(user).subscribe( async (response) => {
      console.log(response);
      let existTble = false;
      for(let r of response.messages){
        console.log(r);
        // if(r.message.indexOf('Coluna ja Existe na base do servidor, Sincronizado com sucesso')){
        if(r.message.indexOf('Existe')){
          existTble = true;
          break;
        }
      }
      console.log(existTble);
      if(existTble){
        this.alterUsSQLite(idUser, user, token, username);
      }
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
        header: 'Falha em sincronizar o usuario ' + username + ' com o id: ' + idUser + ' na base local',
        message: 'Erro: ' + teste,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  getUser(usrID, token){
    this.apiService.getByIDMongoDB(usrID, token).subscribe( async (response) => {
      console.log(response);
      this.us = response;
    }, async (err) => {
      console.log(err);
      let error = err.error ? err.error.message : err.message;
      const alert = await this.alertCtrl.create({
        header: 'Falha em buscar as informações do usuario',
        message: 'Erro: ' + error,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  routerForAlterPasswd(){
    this.router.navigateByUrl('/members/smh/alter-passwd/' + this.us.username);
  }

  routerForAlterInfoAccount(){
    this.router.navigateByUrl('/members/smh/alter-info-conta/' + this.userID);
  }

  sincUser(usrname){
    let u = {
      IDMongodbUser: this.userID,
      username: usrname,
      nome: this.us.nome,
      sobrenome: this.us.sobrenome,
      email: this.us.email,
      senha: this.us.senha,
      celular: this.us.celular,
      isActive: this.us.isActive,
      dispositivo: this.us.dispositivo,
      issync: this.us.issync,
      date: this.us.date
    };
    this.insertOrUpdateUsSQLite(this.userID, u, this.token[0].token, usrname);
  }
}
