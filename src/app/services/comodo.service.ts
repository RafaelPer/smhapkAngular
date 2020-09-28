import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Comodo } from '../models/comodo';
import { ToastController, Platform } from '@ionic/angular';
import { SecureStoreService, Token } from '../services/storageL.service';

@Injectable({
  providedIn: 'root'
})
export class ComodoService {

  // urlLocalHost = 'http://localhost:9999/api/';
  // urlLocalHost = 'http://192.168.0.105:9999/api/';
  urlLocalHost = 'http://192.168.0.240:9999/api/';
  // urlRaspbrry = 'http://192.168.0.105:9999/api/';

  constructor(public http: HttpClient) {}

  // Http Options
  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
      'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
      'Access-Control-Allow-Credentials': 'true'
    })
  };*/
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'x-access-token': ''
  //   })
  // };

  // Handle API errors
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

  getAllComodosMongoDB(token): Observable<any> {
    console.log(token);
    // let hOp = {
    //   headers: new HttpHeaders({
    //     'x-access-token': token
    //   })
    // };
    // let hOp = new HttpHeaders();
    //hOp.headers.set('x-access-token', token);
    // hOp.append('x-access-token', token);
    //console.log(hOp);
    return this.http.get<any>(this.urlLocalHost + 'getAllComodos', {headers: {'x-access-token': token}}).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getAllComodosSQLite(token): Observable<any> {
    //this.httpOptions.headers.append('x-access-token', token);
    return this.http.get<any>(this.urlLocalHost + 'getAllComodosSQLite', {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getByIDMongoDB(idMongo, token): Observable<any> {
    //this.httpOptions.headers.append('x-access-token', token);
    return this.http.get<any>(this.urlLocalHost + 'getComodoByID/' + idMongo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getByIDTableSQLite(idTableSQLite, token): Observable<any> {
    //this.httpOptions.headers.append('x-access-token', token);
    return this.http.get<any>(this.urlLocalHost + 'getComodoByIDSQLite/' + idTableSQLite, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getByUserIDMongoDB(idUser, token): Observable<any> {
    //this.httpOptions.headers.append('x-access-token', token);
    return this.http.get<any>(this.urlLocalHost + 'getComodoByUsrIDComodo/' + idUser, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getByUserIDSQLite(idUser, token): Observable<any> {
    //this.httpOptions.headers.append('x-access-token', token);
    return this.http.get<any>(this.urlLocalHost + 'getComodoByUsrIDComodoSQLite/' + idUser, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getByIDComodoMongoSQLite(idMongo, token): Observable<any> {
    //this.httpOptions.headers.append('x-access-token', token);
    return this.http.get<any>(this.urlLocalHost + 'getComodoByIDMCSQLite/' + idMongo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getByIsFavMongoDB(isFav, token): Observable<any> {
    //this.httpOptions.headers.append('x-access-token', token);
    return this.http.get<any>(this.urlLocalHost + 'getComodoByIsFav/' + isFav, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getByIsFavSQLite(isFav, token): Observable<any> {
    //this.httpOptions.headers.append('x-access-token', token);
    return this.http.get<any>(this.urlLocalHost + 'getComodoByIsFavSQLite/' + isFav, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getByIsFavUserIDMongoDB(isFavo, userId, token): Observable<any> {
    //this.httpOptions.headers.append('x-access-token', token);
    let t = {
      isFav: isFavo,
      userID: userId
    };
    //JSON.parse('{"isFav": ' + t.isFav + ', "userID": "' + t.userID + '"}')
    return this.http.post<any>(this.urlLocalHost + 'getComodoByIsFavUserID', t, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getByIsFavUserIDSQLite(isFavo, userId, token): Observable<any> {
    //this.httpOptions.headers.append('x-access-token', token);
    let t = {
      isFav: isFavo,
      userID: userId
    };

    return this.http.post<any>(this.urlLocalHost + 'getComodoByIsFavUserIDSQLite', t, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  postComodoMongoDB(comodo, token): Observable<any> {
    // this.httpOptions.headers.append('x-access-token', token);


    return this.http.post<any>(this.urlLocalHost + 'createComodo', comodo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  postComodoSQLite(comodo, token): Observable<any> {
    return this.http.post<any>(this.urlLocalHost + 'createComodoSQLite', comodo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deleteComodoByIDMongo(idMongo, token): Observable<any> {
    return this.http.delete<any>(this.urlLocalHost + 'deleteBYIDComodo/' + idMongo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deleteComodoByIDTableSQLite(idTableSQLite, token): Observable<any> {
    return this.http.delete<any>(this.urlLocalHost + 'deleteBYIDComodoSQLite/' + idTableSQLite, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deleteComodoByIDComodoMongoSQLite(idMongo, token): Observable<any> {
    return this.http.delete<any>(this.urlLocalHost + 'deleteBYIDMCSQLite/' + idMongo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  putComodoByIDMongDB(idMongo, comodo, token): Observable<any> {
    return this.http.put<any>(this.urlLocalHost + 'updateBYIDComodo/' + idMongo, comodo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  putComodoByIDTableSQLite(idTableSQLite, comodo, token): Observable<any> {
    return this.http.put<any>(this.urlLocalHost + 'updateBYIDComodoSQLite/' + idTableSQLite, comodo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  putComodoByIDComodoMongoSQLite(idMongo, comodo, token): Observable<any> {
    return this.http.put<any>(this.urlLocalHost + 'updateBYIDMCSQLite/' + idMongo, comodo, {headers: {'x-access-token': token}}/*this.httpOptions*/).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // async presentToast(msg) {
  //   const toast = await this.toastController.create({
  //     message: msg,
  //     duration: 2000,
  //     color: 'danger'
  //   });
  //   return await toast.present();
  // }
}
