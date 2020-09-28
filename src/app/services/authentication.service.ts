import { Injectable } from '@angular/core';
import { SecureStoreService, Token, IdUser } from '../services/storageL.service';
import { BehaviorSubject, Observable, from, of, throwError  } from 'rxjs';
import { take, map, switchMap , retry, catchError } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // token: Token;
  // idUser: IdUser;
  public user: Observable<any>;
  authenticationState = new BehaviorSubject(null);

  constructor(private storage: SecureStoreService, private platform: Platform, private userService: UserService, private router: Router/*, public http: HttpClient*/) {
    // this.platform.ready().then(() => {
    //   this.checkToken();
    //   this.checkIdUser();
    // });

    this.checkToken();
    //this.checkIdUser();
  }

  // handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     //console.error('An error occurred:', error.error.message);
  //     return throwError(error);
  //     // this.presentToast('Erro: ' + error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     // console.error(
  //     //   `Backend returned code ${error.status}, ` +
  //     //   `body was: ${error.error}`);
  //     //console.log(error);
  //     return throwError(error);
  //     // this.presentToast('Erro com a chamada: ' + error.error.message);
  //   }
  //   // return an observable with a user-facing error message
  //   //return throwError(error);
  // }

  storageToken(token: Token){
    this.storage.addToken(token).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  storageIdUser(idUsr: IdUser){
    this.storage.addIdUser(idUsr).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  checkToken(){
    let platformObs = from(this.platform.ready());

    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.getToken());
      }),
      map(token => {
        if (token) {
          console.log(token);
          let decoded = helper.decodeToken(token[0].token);
          console.log(decoded);
          this.authenticationState.next(decoded);
          return true;
        } else {
          return null;
        }
      })
    );
  }

  // checkIdUser(){}

  // checkToken(){
  //   this.storage.getToken().then(
  //     (res) => {
  //       console.log(res);
  //       if (res[0]) {
  //         this.authenticationState.next(true);
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  // checkIdUser(){
  //   this.storage.getToken().then(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  // login(usernm, passwd){
  //   console.log(usernm + ' ' + passwd);
  //   // let urlLocalHost = 'http://localhost:9999/api/';
  //   // let urlRaspbrry = 'http://192.168.0.105:9999/api/';

  //   // let t = {
  //   //   username: usernm,
  //   //   senha: passwd
  //   // };

  //   // return this.http.post(urlLocalHost + 'login', t).pipe(
  //   //     take(1),
  //   //     map(res => {
  //   //       // Extract the JWT, here we just fake it
  //   //       console.log(res);
  //   //       // return response.token;
  //   //     }),
  //   //     // switchMap(tkn => {
  //   //     //   let decoded = helper.decodeToken(String(tkn));
  //   //     //   console.log(decoded);
  //   //     //   this.authenticationState.next(decoded);
  //   //     //   let t: Token = {
  //   //     //     token: tkn
  //   //     //   }
  //   //     //   let storageObs = from(this.storage.addToken(t));
  //   //     //   return storageObs;
  //   //     // }),
  //   //     retry(2),
  //   //     catchError(this.handleError),
  //   // );
  // }

  login(username, passwd){
    console.log(username + ' ' + passwd);
    return this.userService.loginUsr(username, passwd).pipe(
        // take(1),
        map(res => {
          // Extract the JWT, here we just fake it
          console.log(res);
          return res;
        }),
        switchMap(tkn => {
          console.log(tkn.token);
          let decoded = helper.decodeToken(tkn.token);
          console.log(decoded);
          this.authenticationState.next(decoded);
          let t: Token = {
            token: tkn.token,
            auth: tkn.auth,
            timeToExpire: tkn.expiresTime,
            idUser: tkn.idUser,
          }
          let storageObs = from(this.storage.addOneToken(t));
          return storageObs;
          // return [];
        })
        // console.log(response);
    );
  }

  logout(){
    return this.userService.logoutUsr().subscribe(
      (res) => {
        console.log(res);
        this.storage.removeToken().then(() => {
          this.storage.removeIdUser();
          this.router.navigateByUrl('/');
          this.authenticationState.next(null);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUser() {
    return this.authenticationState.getValue();
  }

  // isAuthenticated() {
  //   return this.authenticationState.value;
  // }

}
