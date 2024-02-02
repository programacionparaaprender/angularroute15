import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TioService } from '../../tio/tio.service';
import { Tio } from 'src/app/commons/models/tio';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Tio[] = []
  constructor(
    private tokenService:TokenService
  ) { 

  }

  async ngOnInit() {
    const response = await this.tokenService.lista(); 
    if(response){
      this.usuarios = response.data;
    }else {
      console.log('no esta autorizado');
    }
     
  }

}
