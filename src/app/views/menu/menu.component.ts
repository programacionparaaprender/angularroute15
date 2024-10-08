import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppState } from 'src/app/commons/store/app.state';
import * as TaskActions from 'src/app/commons/store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from 'src/app/commons/models/tio';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUsuariosComponent } from 'src/app/views/tio/login-usuarios/login-usuarios.component';
import { Location } from "@angular/common";
import { TokenService } from 'src/app/views/accederwebtoken/token.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent {
  //@ViewChild(LoginUsuariosComponent) child;

  login: Observable<Tio[]> | null;
  tio: Tio;
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  usuariologeado = false;
  constructor(
    location: Location, 
    private router: Router, 
    //private store: Store<AppState>,
    private tokenService: TokenService) {
      this.tio = new Tio("", "", "");
      this.login = null;
      //this.login = this.store.select('login');
    if(localStorage.getItem('login')){
      const json: string  | null = localStorage.getItem('login');
      if(json != null){
        const usuario = JSON.parse(json);
        if(usuario.nombre != 'error'){
          this.usuariologeado = true;
        }else{
          this.usuariologeado = false; 
          console.log('location')
          //console.log(this.router.url)
          //console.log(this.activatedRoute.url);
          //this.router.navigate(['/login']);
        }
      }
    }else{

    }
  }
  /* ngAfterViewInit() {
    this.usuariologeado = this.child.usuariologeado
  } */
  logout() {
    const usuario: Tio = {
      id: 1,
      nombre: "error",
      password: "123456",
      email: "error@gmail.com"
    }
    this.usuariologeado = false;
    //this.store.dispatch(new TaskActions.InicioUsuario(usuario) )
    this.router.navigate(['/login']);
    this.tokenService.logout();
  }

}
