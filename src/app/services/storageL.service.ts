import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Comodo } from '../models/comodo';
import { Storage } from '@ionic/storage';

export interface Token {
  token: any;
  auth?: any;
  timeToExpire?: any;
  idUser?: any;
}

export interface IdUser {
  idUser: any;
}

const Token_KEY = 'fU4rupiSplstEZEyeBi2TUsTizlyUPHeyoBrAPawreprAcHucuhihuZEbrero3Aw';

const IdUser_KEY = 'WEt6UDEPa9OPhuStlw0woNUKi8aSezeqa36P649aVo6OwEtHLyOfRA91jEpHiBAn';


@Injectable({
  providedIn: 'root'
})

export class SecureStoreService {

  constructor(private storage: Storage) {}

  addToken(token: Token): Promise<any>{
    return this.storage.get(Token_KEY).then((tk: Token[]) => {
      if (tk){
        tk.push(token);
        return this.storage.set(Token_KEY, [tk]);
      }
      else{
        return this.storage.set(Token_KEY, [token]);
      }
    });
  }

  addIdUser(idUser: IdUser): Promise<any>{
    return this.storage.get(IdUser_KEY).then((idU: IdUser[]) => {
      if (idU){
        idU.push(idUser);
        return this.storage.set(IdUser_KEY, [idU]);
      }
      else{
        return this.storage.set(IdUser_KEY, [idUser]);
      }
    });
  }

  addOneToken(token: Token): Promise<any> {
    return this.storage.set(Token_KEY, [token]);
  }

  addOneIdUser(idUser: IdUser): Promise<any> {
    return this.storage.set(IdUser_KEY, [idUser]);
  }

  getToken(): Promise<Token[]>{
    return this.storage.get(Token_KEY);
  }

  getIdUser(): Promise<IdUser[]>{
    return this.storage.get(IdUser_KEY);
  }


  updateToken(token: Token): Promise<any>{
    return this.storage.get(Token_KEY).then((tk: Token[]) => {
      if (!tk || tk.length === 0){
        return null;
      }

      let newToken: Token[] = [];

      for (let t of tk){
        if(t.token === token.token){
          newToken.push(token);
        }
        else {
          newToken.push(t);
        }
      }
      return this.storage.set(Token_KEY, newToken);
    });
  }

  updateIdUser(idUser: IdUser): Promise<any>{
    return this.storage.get(IdUser_KEY).then((idU: IdUser[]) => {
      if (!idU || idU.length === 0){
        return null;
      }

      let newIdUser: IdUser[] = [];

      for (let iU of idU){
        if(iU.idUser === idUser.idUser){
          newIdUser.push(idUser);
        }
        else {
          newIdUser.push(iU);
        }
      }
      return this.storage.set(IdUser_KEY, newIdUser);
    });
  }


  deleteToken(token: string): Promise<Token[]>{
    return this.storage.get(Token_KEY).then((tk: Token[]) => {
      if (!tk || tk.length === 0){
        return null;
      }

      let toKeep: Token[] = [];

      for (let t of tk){
        if(t.token === token){
          toKeep.push(t);
        }
      }
      return this.storage.set(Token_KEY, toKeep);
    });
  }

  deleteIdUser(idUser: string): Promise<IdUser[]>{
    return this.storage.get(IdUser_KEY).then((idU: IdUser[]) => {
      if (!idU || idU.length === 0){
        return null;
      }

      let toKeep: IdUser[] = [];

      for (let iU of idU){
        if(iU.idUser === idUser){
          toKeep.push(iU);
        }
      }
      return this.storage.set(IdUser_KEY, toKeep);
    });
  }

  removeToken(){
    return this.storage.remove(Token_KEY).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  removeIdUser(){
    return this.storage.remove(IdUser_KEY).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
