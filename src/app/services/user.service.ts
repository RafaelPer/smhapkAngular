import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { ToastController, Platform } from '@ionic/angular';
import { SecureStoreService, Token, IdUser } from '../services/storageL.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // urlLocalHost = 'http://localhost:9999/api/';
  // urlLocalHost = 'http://192.168.0.105:9999/api/';
  urlLocalHost = 'http://192.168.0.240:9999/api/';
  // urlRaspbrry = 'http://192.168.0.105:9999/api/';

  constructor(public http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      //console.error('An error occurred:', error.error.message);
      return throwError(error);
      // this.presentToast('Erro: ' + error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);
      //console.log(error);
      return throwError(error);
      // this.presentToast('Erro com a chamada: ' + error.error.message);
    }
    // return an observable with a user-facing error message
    //return throwError(error);
  }

  getAllUsersMongoDB(token): Observable<any> {
    return this.http.get<any>(this.urlLocalHost + 'getAllUsers', {headers: {'x-access-token': token}}).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  
  getAllUsersSQLite(token): Observable<any> {
    return this.http.get<any>(this.urlLocalHost + 'getAllUsersSQLite', {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getByIDMongoDB(idMongo, token): Observable<any> {
    return this.http.get<any>(this.urlLocalHost + 'getUserByID/' + idMongo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getByTableIDSQLite(idTable, token): Observable<any> {
    return this.http.get<any>(this.urlLocalHost + 'getUserByIDSQLite/' + idTable, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getUserByUsernameMongoDB(username, token): Observable<any> {
    return this.http.get<any>(this.urlLocalHost + 'getUserByUsername/' + username, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getUserByUsernameSQLite(username, token): Observable<any> {
    return this.http.get<any>(this.urlLocalHost + 'getUserByUsernameSQLite/' + username, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getUserByIDMUSQLite(idMongo, token): Observable<any> {
    return this.http.get<any>(this.urlLocalHost + 'getUserByIDMUSQLite/' + idMongo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  createUserMongoDB(user): Observable<any> {
    return this.http.post<any>(this.urlLocalHost + 'createUser', user).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  createUserSQLite(user): Observable<any> {
    return this.http.post<any>(this.urlLocalHost + 'createUserSQLite', user).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deleteByIDUserMongoDB(idMongo, token): Observable<any> {
    return this.http.delete<any>(this.urlLocalHost + 'deleteBYIDUser/' + idMongo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deleteByIDTableSQLite(idTable, token): Observable<any> {
    return this.http.delete<any>(this.urlLocalHost + 'deleteBYIDUserSQLite/' + idTable, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deleteBYIDMUSQLite(idMongo, token): Observable<any> {
    return this.http.delete<any>(this.urlLocalHost + 'deleteBYIDMUSQLite/' + idMongo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  updateByIDUser(user, idMongo, token): Observable<any> {
    return this.http.put<any>(this.urlLocalHost + 'updateBYIDUser/' + idMongo, user, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  updateByIDTableSQLite(user, idTable, token): Observable<any> {
    return this.http.put<any>(this.urlLocalHost + 'updateBYIDUserSQLite/' + idTable, user, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  updateByIDMUSQLite(idMongo, user, token): Observable<any> {
    console.log(idMongo);
    console.log(user);
    console.log(token);
    return this.http.put<any>(this.urlLocalHost + 'updateBYIDMUSQLite/' + idMongo, user, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  loginUsr(usernm, passwd): Observable<any> {
    let t = {
      username: usernm,
      senha: passwd
    };
    console.log(t);

    return this.http.post<any>(this.urlLocalHost + 'login', t).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  logoutUsr(): Observable<any> {
    return this.http.post<any>(this.urlLocalHost + 'logout', null).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  alterPasswd(usname, passwdNew, passwd, token): Observable<any> {
    let t = {
      username: usname,
      senha: passwd,
      newPasswd: passwdNew
    };
    return this.http.post<any>(this.urlLocalHost + 'alterpasswd', t, {headers: {'x-access-token': token}}).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

}
