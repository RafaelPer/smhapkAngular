import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComodoService } from '../../services/comodo.service';
import { AuthenticationService } from '../../services/authentication.service';
import { SecureStoreService } from '../../services/storageL.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-comodo-info',
  templateUrl: './comodo-info.page.html',
  styleUrls: ['./comodo-info.page.scss'],
})
export class ComodoInfoPage implements OnInit {

  alterCm: FormGroup;
  isSubmitted = false;
  id: any;
  com: any;
  token = null;
  isActiveValue: any = null;
  isSyncValue: any = null;
  isFavoriteValue: any = null;
  timoutGetComByID: any;
  //responseInsertSQLite: any = null;
  // userID: any;
  // user = null;
  // idUser = null;
  // tempAjust: any = null;
  // arCondStatus: any = null;
  // luzesStatus: any = null;
  // tomadasStatus: any = null;


  constructor(public toastController: ToastController, private auth: AuthenticationService, private alertCtrl: AlertController, private storage: SecureStoreService, private apiService: ComodoService, public formBuilder: FormBuilder, public activatedRoute: ActivatedRoute, public router: Router) {
    this.com = {};
  }

  async ngOnInit() {
    this.alterCm = this.formBuilder.group({
      nomeCom: [''],
      isActive: ['', [Validators.required]],
      issync: ['', [Validators.required]],
      isFavorite: ['', [Validators.required]]
    });
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    // this.user = this.auth.getUser();
    // console.log(this.user);
    // this.idUser = await this.storage.getIdUser();
    // console.log(this.idUser);
    this.token = await this.storage.getToken();
    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
    console.log(this.token);
    // this.userID = this.user ? this.user.id : this.idUser[0].idUser;
    // this.userID = '5f0a2a4fa1d84f17a891d5a9';
    // console.log(this.token);
    this.getByIDCom(this.id, this.token[0].token);
  }

  async ionViewWillEnter() {
    console.log(this.com);
    console.log(this.isActiveValue, this.isSyncValue, this.isFavoriteValue);
    this.alterCm.controls.isActive.setValue(this.isActiveValue);
    this.alterCm.controls.issync.setValue(this.isSyncValue);
    this.alterCm.controls.isFavorite.setValue(this.isFavoriteValue);
    this.timoutGetComByID = setInterval(() => {
      console.log(this.token[0].token);
      // console.log(this.userID);
      this.getByIDCom(this.id, this.token[0].token);
    }, 2000);
  }

  ionViewWillLeave(){
    clearInterval(this.timoutGetComByID);
  }

  alterComSQLite(idMongo, comodo, token, nomCom){
    this.apiService.putComodoByIDComodoMongoSQLite(idMongo, comodo, token).subscribe((response) => {
      console.log(response);
    }, async (err) => {
      console.log(err);
      let error = err.error ? err.error.message : err.message;
      const alert = await this.alertCtrl.create({
        header: 'Falha em atualizar o comodo ' + nomCom + ' com o id: ' + idMongo + ' na base local',
        message: 'Erro: ' + error,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  getByIDCom(idCom, token){
    this.apiService.getByIDMongoDB(idCom, token).subscribe( async (response) => {
      console.log(response);
      // this.tempAjust = await response.ajustTempComodo;
      // this.arCondStatus = await response.statusArCondiconado ? 'on' : 'off';
      // this.luzesStatus = await response.statusLuzComodo ? 'on' : 'off';
      // this.tomadasStatus = await response.statusTomadaComodo ? 'on' : 'off';
      this.com = await response;
      this.isActiveValue = await response.isActive;
      this.isSyncValue = await response.issync;
      this.isFavoriteValue = await response.isFavorite;
    }, async (err) => {
      console.log(err);
      clearInterval(this.timoutGetComByID);
      // this.presentToast(err.error.message);
      let error = err.error ? err.error.message : err.message;
      const alert = await this.alertCtrl.create({
        header: 'Falha em buscar o comodo',
        message: 'Erro: ' + error,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  insertOrUpdateComSQLite(idCom, comodo, token, nomCom){
    this.apiService.postComodoSQLite(comodo, token).subscribe( async (response) => {
      console.log(response);
      let existTble = false;
      for(let r of response.message){
        console.log(r);
        // if(r.message.indexOf('Coluna ja Existe na base do servidor, Sincronizado com sucesso')){
        if(r.message.indexOf('Existe')){
          existTble = true;
          break;
        }
      }
      console.log(existTble);
      if(existTble){
        this.alterComSQLite(idCom, comodo, token, nomCom);
      }
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
      const alert = await this.alertCtrl.create({
        header: 'Falha em sincronizar o comodo ' + nomCom + ' com o id: ' + idCom + ' na base local',
        message: 'Erro: ' + teste,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  alterCom(id, isSync, nomeCom) {
    this.isSubmitted = true;
    console.log(this.alterCm.value);
    let comodo = {};
    let co = {};
    if(this.alterCm.value.nomeCom === ''){
      comodo = {
        isActive: this.alterCm.value.isActive,
        issync: this.alterCm.value.issync,
        isFavorite: this.alterCm.value.isFavorite
      };
      co = {
        IDMongodbComodo: id,
        isActive: this.alterCm.value.isActive,
        issync: this.alterCm.value.issync,
        isFavorite: this.alterCm.value.isFavorite
      };
    }
    else{
      comodo = {
        nomeComodo: this.alterCm.value.nomeCom,
        isActive: this.alterCm.value.isActive,
        issync: this.alterCm.value.issync,
        isFavorite: this.alterCm.value.isFavorite
      };
      co = {
        IDMongodbComodo: id,
        nomeComodo: this.alterCm.value.nomeCom,
        isActive: this.alterCm.value.isActive,
        issync: this.alterCm.value.issync,
        isFavorite: this.alterCm.value.isFavorite
      };
    }
    console.log(comodo);
    this.apiService.putComodoByIDMongDB(id, comodo, this.token[0].token).subscribe((response) => {
      console.log(response);
      this.getByIDCom(id, this.token[0].token);
      if(isSync){
        this.insertOrUpdateComSQLite(id, co, this.token[0].token, nomeCom);
      }
      else{
        this.presentToast('Sincronização do Comodo desativada, não sincronizado');
      }
    }, async (err) => {
      let error = err.error ? err.error.message : err.message;
      const alert = await this.alertCtrl.create({
        header: 'Falha em atualizar o comodo ' + nomeCom + ' com o id: ' + id,
        message: 'Erro: ' + error,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'danger'
    });
    return await toast.present();
  }

  // rangeChanged(isSync, idCom, event, nomeCom){
  //   console.log('teste');
  //   console.log(isSync);
  //   console.log(idCom);
  //   console.log(event);
  //   console.log(event.detail.value);
  //   if(event.detail.value){
        
  //     let t = {
  //       ajustTempComodo: event.detail.value
  //     }
  //     console.log(t);
  //     this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
  //       console.log(response);
  //       this.getByIDCom(idCom, this.token[0].token);
  //       if(isSync){
  //         let te ={
  //           IDMongodbComodo: idCom,
  //           ajustTempComodo: event.detail.value
  //         }
  //         this.insertOrUpdateComSQLite(idCom, te, this.token[0].token, nomeCom);
  //       }
  //       else{
  //         this.presentToast('Sincronização do Comodo desativada, não sincronizado');
  //       }        
  //     }, async (err) => {
  //       let error = err.error ? err.error.message : err.message;
  //       const alert = await this.alertCtrl.create({
  //         header: 'Falha em atualizar o status do ar condicionado do comodo ' + nomeCom + ' com o id: ' + idCom,
  //         message: 'Erro: ' + error,
  //         buttons: ['OK']
  //       });
  //       await alert.present();
  //     });
  //   }
  //   else{
  //     this.presentToast('Selecione uma Temperatura');
  //   }
  // }

  // changeArCondButton(isSync, idCom, event, nomeCom){
  //   console.log('changeArCondButton');
  //   console.log(isSync);
  //   console.log(idCom);
  //   console.log(event);
  //   console.log(event.detail.value);
  //   if (event.detail){
  //     let value = event.detail.value;
  //     let statusAr = null;
  //     if(value === 'on'){
  //       statusAr = true;
  //     }
  //     else if (value === 'off'){
  //       statusAr = false;
  //     }
  //     let t = {
  //       statusArCondiconado: statusAr
  //     };
  //     console.log(t);
  //     console.log(this.token);
  //     // console.log(this.userID);
  //     this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
  //       console.log(response);
  //       this.getByIDCom(idCom, this.token[0].token);
  //       if(isSync){
  //         let te ={
  //           IDMongodbComodo: idCom,
  //           statusArCondiconado: statusAr
  //         }
  //         this.insertOrUpdateComSQLite(idCom, te, this.token[0].token, nomeCom);
  //       }
  //       else{
  //         this.presentToast('Sincronização do Comodo desativada, não sincronizado');
  //       }
  //     },
  //     async (err) => {
  //       console.log(err);
  //       let error = err.error ? err.error.message : err.message;
  //       const alert = await this.alertCtrl.create({
  //         header: 'Falha em atualizar o status do ar condicionado do comodo ' + nomeCom + ' com o id: ' + idCom,
  //         message: 'Erro: ' + error,
  //         buttons: ['OK']
  //       });
  //       await alert.present();
  //     });
  //   }
  // }

  // changeLuzesButton(isSync, idCom, event, nomeCom){
  //   console.log('changeLuzesButton');
  //   console.log(isSync);
  //   console.log(idCom);
  //   console.log(event);
  //   console.log(event.detail.value);
  //   console.log(nomeCom);
  //   if (event.detail){
  //     let value = event.detail.value;
  //     let statusLuzes = null;
  //     if(value === 'on'){
  //       statusLuzes = true;
  //     }
  //     else if (value === 'off'){
  //       statusLuzes = false;
  //     }
  //     let t = {
  //       statusLuzComodo: statusLuzes
  //     };
  //     console.log(t);
  //     console.log(this.token);
  //     // console.log(this.userID);
  //     this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
  //       console.log(response);
  //       this.getByIDCom(idCom, this.token[0].token);
  //       if(isSync){
  //         let te ={
  //           IDMongodbComodo: idCom,
  //           statusLuzComodo: statusLuzes
  //         }
  //         this.insertOrUpdateComSQLite(idCom, te, this.token[0].token, nomeCom);
  //       }
  //       else{
  //         this.presentToast('Sincronização do Comodo desativada, não sincronizado');
  //       }
  //     },
  //     async (err) => {
  //       console.log(err);
  //       let error = err.error ? err.error.message : err.message;
  //       const alert = await this.alertCtrl.create({
  //         header: 'Falha em atualizar o status das luzes do comodo ' + nomeCom + ' com o id: ' + idCom,
  //         message: 'Erro: ' + error,
  //         buttons: ['OK']
  //       });
  //       await alert.present();
  //     });
  //   }
  // }

  // changeTomadasButton(isSync, idCom, event, nomeCom){
  //   console.log('changeTomadasButton');
  //   console.log(isSync);
  //   console.log(idCom);
  //   console.log(event);
  //   console.log(event.detail.value);
  //   console.log(nomeCom);
  //   if (event.detail){
  //     let value = event.detail.value;
  //     let statusTomadas = null;
  //     if(value === 'on'){
  //       statusTomadas = true;
  //     }
  //     else if (value === 'off'){
  //       statusTomadas = false;
  //     }
  //     let t = {
  //       statusTomadaComodo: statusTomadas
  //     };
  //     console.log(t);
  //     console.log(this.token);
  //     // console.log(this.userID);
  //     this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
  //       console.log(response);
  //       this.getByIDCom(idCom, this.token[0].token);
  //       if(isSync){
  //         let te ={
  //           IDMongodbComodo: idCom,
  //           statusTomadaComodo: statusTomadas
  //         }
  //         this.insertOrUpdateComSQLite(idCom, te, this.token[0].token, nomeCom);
  //       }
  //       else{
  //         this.presentToast('Sincronização do Comodo desativada, não sincronizado');
  //       }
  //     },
  //     async (err) => {
  //       console.log(err);
  //       let error = err.error ? err.error.message : err.message;
  //       const alert = await this.alertCtrl.create({
  //         header: 'Falha em atualizar o status das luzes do comodo ' + nomeCom + ' com o id: ' + idCom,
  //         message: 'Erro: ' + error,
  //         buttons: ['OK']
  //       });
  //       await alert.present();
  //     });
  //   }
  // }

  delCom(idCom, nomeCom){
    this.apiService.deleteComodoByIDMongo(idCom, this.token[0].token).subscribe((response) => {
      console.log(response);
      this.apiService.deleteComodoByIDComodoMongoSQLite(idCom, this.token[0].token).subscribe((resp) => {
        console.log(resp);
        this.router.navigateByUrl('/members');
      },
      async (erro) => {
        console.log(erro);
        let error = erro.error ? erro.error.message : erro.message;
        const alert = await this.alertCtrl.create({
          header: 'Falha em deletar o comodo ' + nomeCom + ' com o id: ' + idCom + ' na base local',
          message: 'Erro: ' + error,
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigateByUrl('/members');
      });
    },
    async (err) => {
      console.log(err);
      let error = err.error ? err.error.message : err.message;
      const alert = await this.alertCtrl.create({
        header: 'Falha em deletar o comodo ' + nomeCom + ' com o id: ' + idCom,
        message: 'Erro: ' + error,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  sincroCom(idCom, nomeCom, isSync){
    if(isSync){
      let comodo = {
        IDMongodbComodo: idCom,
        IDMongodbUser: this.com.userID,
        nomeComodo: this.com.nomeComodo,
        tempComodo: this.com.tempComodo,
        umiComodoF: this.com.umiComodoF,
        ajustTempComodo: this.com.ajustTempComodo,
        statusLuzComodo: this.com.statusLuzComodo,
        statusTomadaComodo: this.com.statusTomadaComodo,
        statusJanelaComodo: this.com.statusJanelaComodo,
        statusPortaComodo: this.com.statusPortaComodo,
        statusPresencaComodo: this.com.statusPresencaComodo,
        statusArCondiconado: this.com.statusArCondiconado,
        isActive: this.com.isActive,
        isFavorite: this.com.isFavorite,
        isPareado: this.com.isPareado,
        dispPareado: this.com.dispPareado,
        issync: this.com.issync,
        date: this.com.date
      };
      this.insertOrUpdateComSQLite(idCom, comodo, this.token[0].token, nomeCom);
    }
    else{
      this.presentToast('Sincronização desativada! Não Sincronizado');
    }
  }

  // te(event){
  //   console.log(event);
  // }

  get errorControl() {
    return this.alterCm.controls;
  }
}
