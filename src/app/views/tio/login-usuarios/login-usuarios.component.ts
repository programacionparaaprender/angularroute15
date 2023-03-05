import { Component, OnInit } from '@angular/core';
import { Tio } from 'src/app/commons/models/tio';
import { TioService } from 'src/app/views/tio/tio.service';
import { Router } from '@angular/router';

import { AppState } from 'src/app/commons/store/app.state';
import * as TaskActions from 'src/app/commons/store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from 'src/app/views/accederwebtoken/token.service';


@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {
  login: Observable<Tio[]>;
  tio: Tio;
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  constructor(
    private tioService: TioService, 
    private router: Router,
    private tokenService: TokenService,
    private store: Store<AppState>) { 
    this.tio = new Tio("", "", "");
    this.login = this.store.select('login');
    if(localStorage.getItem('login')){
      const json: string  | null = localStorage.getItem('login');
      if(json != null){
        const usuario = JSON.parse(json);
        //console.log('login')
        //console.log(localStorage.getItem('login'))  }console.log('login')
        console.log(localStorage.getItem('login'))
        if(usuario.nombre != 'error'){
          this.router.navigate(['/']);
        }
      }
    }
  }

  ngOnInit() {
  }

  async onLogin() {
    
    try{

      this.tio = new Tio(this.nombre, this.email, this.password);
      await this.tokenService.login(this.tio);
      var response = await this.tioService.login(this.tio);
      if(response.status==200){
        const data = response.data;
        const usuario = data;
        this.store.dispatch(new TaskActions.InicioUsuario({
          id: usuario.id,
          nombre: usuario.nombre,
          email: usuario.email,
          password: usuario.password
        }) );

        
        this.router.navigate(['/']);
      }else{
        console.log('ocurrio un error')
        console.log(JSON.stringify(response));
      }
      /* this.tioService.login(this.tio).subscribe(
        data => {
          console.log('data:')
          console.log(JSON.stringify(data))
          console.log(JSON.stringify(data[0]))
          //alert(data.mensaje);
          //this.router.navigate(['/']);
        },
        err => {
          alert(err.error.mensaje);
        }
      ); */
    }catch(e){
      console.log(e);
    }
  }
}
