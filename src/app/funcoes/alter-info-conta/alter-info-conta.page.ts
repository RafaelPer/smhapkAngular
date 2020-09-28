import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { SecureStoreService } from '../../services/storageL.service';
import { AlertController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alter-info-conta',
  templateUrl: './alter-info-conta.page.html',
  styleUrls: ['./alter-info-conta.page.scss'],
})
export class AlterInfoContaPage implements OnInit {

  alterUser: FormGroup;
  isSubmitted = false;
  token = null;
  userID: any;
  user = null;
  idUser = null;
  us: any;
  id: any;
  isActiveValue: any;
  isSyncValue: any;

  constructor(public toastController: ToastController, private auth: AuthenticationService, private alertCtrl: AlertController, private storage: SecureStoreService, private apiService: UserService, public formBuilder: FormBuilder, public activatedRoute: ActivatedRoute, public router: Router) {
    this.us = {};
  }

  async ngOnInit() {
    this.alterUser = this.formBuilder.group({
      nomeUsr: [''],
      snUsr: [''],
      usernameUsr: [''],
      emailUsr: ['', [Validators.pattern(/[\w\.-]*[a-zA-Z0-9_]@[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]/)]],
      celularUsr: ['', [Validators.pattern(/(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})/)]],
      isActive: [''],
      issync: ['']
    });
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    this.user = this.auth.getUser();
    console.log(this.user);
    this.idUser = await this.storage.getIdUser();
    console.log(this.idUser);
    this.token = await this.storage.getToken();
    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
    console.log(this.token);
    this.userID = this.user ? this.user.id : this.idUser[0].idUser;
    // this.userID = '5f0a2a4fa1d84f17a891d5a9';
    //console.log(this.token);
    this.getByIDUs(this.id, this.token[0].token);
  }

  async ionViewWillEnter() {
    console.log(this.us);
    this.alterUser.controls.isActive.setValue(this.isActiveValue);
    this.alterUser.controls.issync.setValue(this.isSyncValue);
  }

  alterUsSQLite(idMongo, us, token, username){
    this.apiService.updateByIDMUSQLite(idMongo, us, token).subscribe((response) => {
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

  getByIDUs(idUs, token){
    this.apiService.getByIDMongoDB(idUs, token).subscribe( async (response) => {
      console.log(response);
      // this.tempAjust = await response.ajustTempComodo;
      // this.arCondStatus = await response.statusArCondiconado ? 'on' : 'off';
      // this.luzesStatus = await response.statusLuzComodo ? 'on' : 'off';
      // this.tomadasStatus = await response.statusTomadaComodo ? 'on' : 'off';
      this.us = await response;
      this.isActiveValue = await response.isActive;
      this.isSyncValue = await response.issync;
    }, async (err) => {
      console.log(err);
      // this.presentToast(err.error.message);
      let error = err.error ? err.error.message : err.message;
      const alert = await this.alertCtrl.create({
        header: 'Falha em buscar o usuario',
        message: 'Erro: ' + error,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  insertOrUpdateComSQLite(idUs, us, token, username){
    this.apiService.createUserSQLite(us).subscribe( async (response) => {
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
        this.alterUsSQLite(idUs, us, token, username);
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
        header: 'Falha em sincronizar o usuario ' + username + ' com o id: ' + idUs + ' na base local',
        message: 'Erro: ' + teste,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  alterUsr(username) {
    this.isSubmitted = true;
    console.log(this.alterUser);
    if (!this.alterUser.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.alterUser.value);
      // let u = {
      //   nome: this.alterUser.value.nomeUsr === '' ? this.us.nome : this.alterUser.value.nomeUsr,
      //   sobrenome: this.alterUser.value.snUsr === '' ? this.us.sobrenome : this.alterUser.value.snUsr,
      //   username: this.alterUser.value.usernameUsr === '' ? this.us.username : this.alterUser.value.usernameUsr,
      //   email: this.alterUser.value.emailUsr === '' ? this.us.email : this.alterUser.value.emailUsr,
      //   celular: this.alterUser.value.celularUsr === '' ? this.us.celular : this.alterUser.value.celularUsr,
      //   isActive: this.alterUser.value.isActive === '' ? this.us.isActive : this.alterUser.value.isActive,
      //   issync: this.alterUser.value.issync === '' ? this.us.issync : this.alterUser.value.issync
      // };
      let u = {};
      if(this.alterUser.value.nomeUsr != ''){
        let n = {
          nome: this.alterUser.value.nomeUsr
        };
        this.addElement(u, n)
      }

      if(this.alterUser.value.snUsr != ''){
        let sn = {
          sobrenome: this.alterUser.value.snUsr
        };
        this.addElement(u, sn);
      }

      if(this.alterUser.value.usernameUsr != ''){
        let un = {
          username: this.alterUser.value.usernameUsr
        };
        this.addElement(u, un);
      }

      if(this.alterUser.value.emailUsr != ''){
        let e = {
          email: this.alterUser.value.emailUsr
        };
        this.addElement(u, e);
      }

      if(this.alterUser.value.celularUsr != ''){
        let c = {
          celular: this.alterUser.value.celularUsr
        };
        this.addElement(u, c);
      }
      let as = {
        isActive: this.alterUser.value.isActive,
        issync: this.alterUser.value.issync
      }

      this.addElement(u, as);

      let u2 = {
        IDMongodbUser: this.userID,
        senha: this.us.senha
      }

      this.addElement(u2, u);
      
      console.log(u2);
      console.log(u);
      this.apiService.updateByIDUser(u, this.userID, this.token[0].token).subscribe((response) => {
        console.log(response);
        // let u2 = {
        //   IDMongodbUser: this.userID,
        //   nome: this.alterUser.value.nomeUsr === '' ? this.us.nome : this.alterUser.value.nomeUsr,
        //   sobrenome: this.alterUser.value.snUsr === '' ? this.us.sobrenome : this.alterUser.value.snUsr,
        //   username: this.alterUser.value.usernameUsr === '' ? this.us.username : this.alterUser.value.usernameUsr,
        //   email: this.alterUser.value.emailUsr === '' ? this.us.email : this.alterUser.value.emailUsr,
        //   celular: this.alterUser.value.celularUsr === '' ? this.us.celular : this.alterUser.value.celularUsr,
        //   isActive: this.alterUser.value.isActive === '' ? this.us.isActive : this.alterUser.value.isActive,
        //   issync: this.alterUser.value.issync === '' ? this.us.issync : this.alterUser.value.issync,
        //   senha: this.us.senha
        // };
        console.log(u2);
        this.insertOrUpdateComSQLite(this.userID, u2, this.token[0].token, username);
        this.router.navigateByUrl('/members/smh/config');
      }, async (err) => {
        console.log(err);
        let error = err.error ? err.error.message : err.message;
        const alert = await this.alertCtrl.create({
          header: 'Falha em atualizar o usuario ' + username + ' com o id: ' + this.userID,
          message: 'Erro: ' + error,
          buttons: ['OK']
        });
        await alert.present();
      });
    }
  }

  addElement (ElementList, element) {
    let newList = Object.assign(ElementList, element)
    return newList
  }

  backToConfig(){
    this.router.navigateByUrl('/members/smh/config');
  }

  get errorControl() {
    return this.alterUser.controls;
  }

}
