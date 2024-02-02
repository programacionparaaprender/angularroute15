import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tio } from 'src/app/commons/models/tio';
import axios from "axios";
import { Usertoken } from 'src/app/models/usertoken';
import { Responseusuario } from 'src/app/models/responseusuario';
import { Responseusertoken } from 'src/app/models/responseusertoken';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  myApiUrl = "https://localhost:7107/api/account/";
  myApiUsuario = "https://localhost:7107/api/usuario/";
  KEYTOKEN = "KEYTOKEN";
  tokenURL = 'https://localhost:7107/token/';
  tioURL = 'https://localhost:7107/api/tio/';
  apiv1URL = 'https://localhost:7107/api/v1';
  usuariologeado = false;
  constructor(private httpClient: HttpClient) { }

  async login(user: Tio) {
    var token:string = "";
    var response:Responseusertoken | null = null;
    try{
        
        ///response = await this.httpClient.post<Usertoken>(this.myApiUrl + 'token', user).toPromise();
        console.log(JSON.stringify(user));
        response = await axios.post(this.myApiUrl + 'token', user);
        if(response != null){
            token = response.data.token;
            console.log('response: '+ JSON.stringify(response));
            this.setUser(response.data);
            window.localStorage.removeItem('token');
            window.localStorage.setItem('token', token);   
            console.log("token: " + window.localStorage.getItem('token')); 
        }
    }catch(e){
        console.log(e);
    }
    return response;
  } 

  setUser(user: Usertoken):void   {
    localStorage.setItem('login', JSON.stringify(user));
  }

  getUser():Usertoken | null  {
    let user: Usertoken;
    let cadena: string | null = localStorage.getItem('login');
    if(cadena != null){
      const user: Usertoken = JSON.parse(cadena);
      return user;
    }
    return null;
  }

  obtenerToken(){
    const token = localStorage.getItem('token');
    return token;
  }

  async listaName(name: string) {
    var response;
    try{
        response = await this.httpClient.get<Tio[]>(this.apiv1URL + '/users/' + name + '/todos').toPromise();
        //response = await this.httpClient.get<Tio[]>(this.tioURL + 'lista').toPromise();        
        console.log('response');
        console.log(JSON.stringify(response));
      }catch(e: unknown | any){
        return e.response;
      }
    return response;
  }

  async listaId() {
    var response;
    try{
        const id:string = "0";
        response = await this.httpClient.get<Tio[]>(this.apiv1URL + '/users/' + id + '/id').toPromise();
        //response = await this.httpClient.get<Tio[]>(this.tioURL + 'lista').toPromise();        
        console.log('response');
        console.log(JSON.stringify(response));
      }catch(e: unknown | any){
        return e.response;
      }
    return response;
  }

  async listaSinToken() {
    var response;
    try{
        response = await this.httpClient.get<Tio[]>(this.myApiUsuario).toPromise();
        //response = await this.httpClient.get<Tio[]>(this.tioURL + 'lista').toPromise();        
        console.log('response');
        console.log(JSON.stringify(response));
      }catch(e: unknown | any){
        return e.response;
      }
    return response;
  }

  async lista() {
    var response;
    try{
        const token = localStorage.getItem('token');
        console.log('token: ' + token);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          });
        const requestOptions = { headers: headers };
        response = await this.httpClient.get<Tio[]>(this.myApiUsuario, requestOptions).toPromise();
        //response = await this.httpClient.get<Tio[]>(this.tioURL + 'lista').toPromise();        
        console.log('response');
        console.log(JSON.stringify(response));
      }catch(e: unknown | any){
        return e.response;
      }
    return response;
  }


  

  async logout() {
    try{
        window.localStorage.removeItem('token');
    }catch(e){
        console.log(e);
    }
  } 

  async login2() {
    var token = "";
    //const username:string = "randomuser123";
    //const password:string = "password";
  
    const username:string = "luis13711";
    const password:string = "123456";

    const user = {
      "username": username,
      "password": password
    }
    try{
        var response;
        // en el post también al final se coloca , { 'headers': headers }
        response = await this.httpClient.post<any>(this.tokenURL + 'login', user).toPromise();
        if(response){
            token = response.token;
            window.localStorage.removeItem('token');
            window.localStorage.setItem('token', token);
            return token;
        }
        
    }catch(e){
        console.log(e);
        return token;
    }
    return "";
    
  } 
}
