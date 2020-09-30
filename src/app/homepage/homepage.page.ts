import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonRange, IonNote, IonButton, ToastController, IonRadioGroup } from '@ionic/angular';
import { ComodoService } from '../services/comodo.service';
import { Comodo } from '../models/comodo';
import { AuthenticationService } from '../services/authentication.service';
import { SecureStoreService } from '../services/storageL.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
// import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';



// export interface pairedlist {
//   class: number;
//   id: string;
//   address: string;
//   name: string;
// }

@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.page.html',
  styleUrls: ['homepage.page.scss']
})
export class HomepagePage {

  @ViewChild('slides') slider: IonSlides;
  @ViewChild('buttonJanelaOpen') btnJO: IonButton;
  @ViewChild('buttonJanelaClose') btnJC: IonButton;
  @ViewChild('buttonPortaOpen') btnPO: IonButton;
  @ViewChild('buttonPortaClose') btnPC: IonButton;
  @ViewChild('buttonSenPrenDetec') btnSPDetec: IonButton;
  @ViewChild('buttonSenPrenNoDetec') btnSPNoDetec: IonButton;
  @ViewChild('ionRadioGroupArCond') IonRadioGroupArCond: IonRadioGroup;


  // pairedList: pairedlist;
  // listToggle = false;
  // pairedDeviceID = 0;

  timoutGetComByUserIDMDB: any;

  timoutGetComByFavUserIDMBD: any;

  dataSend: any;

  segment = 0;

  comodoData: any;

  comodoFav: any;

  token = null;

  userID: any;

  st: any;

  user = null;

  idUser = null;

  // comFav: any = {
  //   statusArCondiconado: true
  // }

  constructor(private socket: Socket, private router: Router,
              public apiService: ComodoService, public toastController: ToastController,
              private auth: AuthenticationService, private alertCtrl: AlertController,
              private storage: SecureStoreService) {
    this.comodoData = [];
    this.comodoFav = [];
  }

  async ngOnInit() {
    // this.getAllComodosMongoDB();
    //this.slider.lockSwipes(true);
    this.user = this.auth.getUser();
    console.log(this.user);
    this.idUser = await this.storage.getIdUser();
    console.log(this.idUser);
    this.token = await this.storage.getToken();
    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
    console.log(this.token);
    this.userID = this.user ? this.user.id : this.idUser[0].idUser;
    // this.userID = '5f0a2a4fa1d84f17a891d5a9';
    // console.log(this.token);
    // this.segment = userID + '0'
    this.getAllComodosByUserIDMDB(false, this.userID, this.token[0].token);
    this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
    // this.checkBluetoothEnabled();
    this.parearComodo();
  }

  async ionViewWillEnter() {
    this.user = this.auth.getUser();
    console.log(this.user);
    this.idUser = await this.storage.getIdUser();
    console.log(this.idUser);
    this.token = await this.storage.getToken();
    // this.token = [{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGEyYTRmYTFkODRmMTdhODkxZDVhOSIsImlhdCI6MTU5NTAyOTYwNSwiZXhwIjoxNjI2NjUyMDA1fQ.2kp-KLy6458Dq6zGgPsygBB_dyRws9BlqSNjbplyzOk'}];
    console.log(this.token);
    this.userID = this.user ? this.user.id : this.idUser[0].idUser;
    // this.userID = '5f0a2a4fa1d84f17a891d5a9';
    console.log(this.comodoFav);
    console.log(this.comodoData);
    // if(this.slider){
    //   this.slider.slideTo(this.segment);
    //   console.log("slider");
    // }
    // else{
    //   this.presentToast('Não existe comodo favorito cadastrado');
    // }
    // console.log(this.slider);
    // this.slider.slideTo(this.segment);
    this.getAllComodosByUserIDMDB(false, this.userID, this.token[0].token);
    this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
    // this.checkBluetoothEnabled();
    this.parearComodo();
    // let tk = this.token[0].token;
    // let idU = this.userID;
    // console.log(tk)
    // console.log(idU);
    // function getAllCsByUserIDMDB() {
    //   console.log(tk);
    //   console.log(idU);
    //   this.getAllComodosByUserIDMDB(false, idU, tk);
    // }
    // function getCsByFavUserIDMBD() {
    //   console.log(tk);
    //   console.log(idU);
    //   this.getComodoByFavUserIDMBD(true, idU, tk);
    // }
    this.timoutGetComByUserIDMDB = setInterval(() => {
      console.log(this.token[0].token);
      console.log(this.userID);
      this.getAllComodosByUserIDMDB(false, this.userID, this.token[0].token);
    }, 2000);
    this.timoutGetComByFavUserIDMBD = setInterval(() => {
      console.log(this.token[0].token);
      console.log(this.userID);
      this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
    }, 2000);
    // console.log(this.token);
  }

  ionViewWillLeave(){
    clearInterval(this.timoutGetComByUserIDMDB);
    clearInterval(this.timoutGetComByFavUserIDMBD);
  }

  getAllComodosByUserIDMDB(isfav, userID, token){
    console.log(userID + '  ' + token);
    this.apiService.getByIsFavUserIDMongoDB(isfav, userID, token).subscribe((response) => {
      console.log(response);
      this.comodoData = response;
    }, async (err) => {
      console.log(err);
      clearInterval(this.timoutGetComByUserIDMDB);
      // this.presentToast(err.error.message);
      let error = err.error ? err.error.message : err.message;
      const alert = await this.alertCtrl.create({
        header: 'Falha em buscar os comodos',
        message: 'Erro: ' + error,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  getComodoByFavUserIDMBD(isFav, userID, token){
    this.apiService.getByIsFavUserIDMongoDB(isFav, userID, token).subscribe(response => {
      console.log(response);
      this.comodoFav = response;
    }, async (err) => {
      console.log(err);
      clearInterval(this.timoutGetComByFavUserIDMBD);
      let error = err.error ? err.error.message : err.message;
      const alert = await this.alertCtrl.create({
        header: 'Falha em buscar os comodos favoritos',
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
        if(r.message.indexOf('Coluna ja Existe na base do servidor, Sincronizado com sucesso')){
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

  async segmentChanged() {
    // // this.slider.lockSwipes(false);
    // await this.slider.slideTo(this.segment);
    console.log(this.segment);
  }

  // async slideChanged() {
  //   // this.slider.lockSwipes(false);
  //   this.segment = await this.slider.getActiveIndex();
  // }

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
  //       this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
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

  // ionFocus(event){
  //   this.slider.lockSwipes(true);
  //   //console.log(event);
  //   console.log("hhhhhhhhhhhh");
  //   document.getElementById('t').blur();
  // }

  // ionBlur(event){
  //   this.slider.lockSwipes(false);
  //   console.log("tttttttttttt");
  // }

  logout(){
    //console.log('ttttttt');
    this.auth.logout();
    clearInterval(this.timoutGetComByUserIDMDB);
    clearInterval(this.timoutGetComByFavUserIDMBD);
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'danger'
    });
    return await toast.present();
  }

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
  //     console.log(this.userID);
  //     this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
  //       console.log(response);
  //       this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
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
  //     console.log(this.userID);
  //     this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
  //       console.log(response);
  //       this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
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
  //     console.log(this.userID);
  //     this.apiService.putComodoByIDMongDB(idCom, t, this.token[0].token).subscribe((response) => {
  //       console.log(response);
  //       this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
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

  routerMore(idCom){
    this.router.navigateByUrl('/members/smh/comodo-info/' + idCom);
  }

  
  // bluetoothSerial
/*  checkBluetoothEnabled() {
    this.bluetoothSerial.isEnabled().then(success => {
      this.listPairedDevices();
    }, error => {
      this.showError("Please Enable Bluetooth")
    });
  }

  listPairedDevices() {
    this.bluetoothSerial.list().then(success => {
      this.pairedList = success;
      this.listToggle = true;
    }, error => {
      this.showError("Please Enable Bluetooth")
      this.listToggle = false;
    });
  }

  selectDevice() {
    let connectedDevice = this.pairedList[this.pairedDeviceID];
    if (!connectedDevice.address) {
      this.showError('Select Paired Device to connect');
      return;
    }
    let address = connectedDevice.address;
    let name = connectedDevice.name;

    this.connect(address);
  }

  connect(address) {
    // Attempt to connect device with specified address, call app.deviceConnected if success
    this.bluetoothSerial.connect(address).subscribe(success => {
      this.deviceConnected();
      this.presentToast("Successfully Connected");
    }, error => {
      this.showError("Error:Connecting to Device");
    });
  }

  deviceConnected() {
    // Subscribe to data receiving as soon as the delimiter is read
    this.bluetoothSerial.subscribe('\n').subscribe(success => {
      this.handleData(success);
      this.presentToast("Connected Successfullly");
    }, error => {
      this.showError(error);
    });
  }

  deviceDisconnected() {
    // Unsubscribe from data receiving
    this.bluetoothSerial.disconnect();
    this.presentToast("Device Disconnected");
  }

  handleData(data) {
    this.presentToast(data);
  }

  sendData(idCom) {
    // this.dataSend+='\n';
    this.dataSend = {
      idUser: this.userID, 
      token: this.token[0].token,
      idComodo: idCom
    };
    this.presentToast(this.dataSend);

    this.bluetoothSerial.write(this.dataSend).then(success => {
      this.presentToast(success);
    }, error => {
      this.showError(error)
    });
  }

  async showError(error) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: error,
      buttons: ['OK']
    });
    await alert.present();
  }*/

  parearComodo(/*idC*/){
    this.socket.connect();

    this.dataSend = {
      idUs: this.userID,
      tk: this.token[0].token,
      //idCom: idC
    };

    this.socket.emit('parearCom', this.dataSend);

    this.socket.fromEvent('comChanged').subscribe(data => {
      console.log(data);
      if (data['event'] === 'left') {
        this.presentToast('Disconectado');
      } else {
        this.presentToast('Conectado');
      }
    }, async err => {
      const alert = await this.alertCtrl.create({
        header: 'Falha em parear',
        message: 'Erro: ' + err,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  sendMessage(idC) {
    // this.socket.connect();
    console.log('teste')
    this.dataSend = {
      idUs: this.userID,
      tk: this.token[0].token,
      idCom: idC
    };

    this.socket.emit('send-message', this.dataSend);
    // this.socket.disconnect();
    this.socket.fromEvent('message').subscribe(message => {
      console.log(message);
      const teste = [];
      this.presentToast(message);
    }, async err => {
      const alert = await this.alertCtrl.create({
        header: 'Falha em enviar pareamento',
        message: 'Erro: ' + err,
        buttons: ['OK']
      });
      await alert.present();
    });
    this.getComodoByFavUserIDMBD(true, this.userID, this.token[0].token);
    this.getAllComodosByUserIDMDB(false, this.userID, this.token[0].token);
  }

}
