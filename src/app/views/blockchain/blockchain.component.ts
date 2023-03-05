import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AppState } from 'src/app/commons/store//app.state';
import * as TaskActions from 'src/app/commons/store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from 'src/app/commons/models/tio';
import { TioService } from 'src/app/views/tio/tio.service';


@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockChainComponent implements OnInit {
  title = 'Ejemplo simpre de criptomonedas';
  bloques = []
  login: Observable<Tio[]>;

  constructor(private tioService: TioService, private router: Router,private store: Store<AppState>) { 
    this.login = this.store.select('login');
    if(localStorage.getItem('login')){
      const json: string | null = localStorage.getItem('login');
      if(json != null){
        const usuario = JSON.parse(json);
        console.log('login')
        console.log(localStorage.getItem('login'))
        if(usuario.nombre != 'error'){
          //this.router.navigate(['/']);
        }else{
          this.router.navigate(['/login']);
        }
      }
    } 


  }
  
  ngOnInit(): void {
  }
  prueba(): void{
    alert('Prueba');
  }
  
}
