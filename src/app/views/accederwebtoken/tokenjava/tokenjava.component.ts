import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TokenService } from 'src/app/views/accederwebtoken/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tio } from 'src/app/commons/models/tio';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tokenjava',
  templateUrl: './tokenjava.component.html',
  styleUrls: ['./tokenjava.component.css']
})
export class TokenJavaComponent {
  lista:any = {};
  registerForm: FormGroup;
  constructor(
    private readonly fb: FormBuilder, 
    private readonly tokenService: TokenService,
  ) { 
    this.registerForm = this.fb.group({ 
      inputtoken: ['', Validators.required],
      nombre: ['', Validators.required]
    }); 
  }

  initFechaInput(fecha: any){

  }

  async obtenerUsuariosSinToken(){
    this.lista = await this.tokenService.listaSinToken();
  }

  async obtenerToken(){
    const tio:Tio = {
      id: 0,
      nombre: "",
      email: "",
      password: ""
    };
    var token = await this.tokenService.login2();
    this.registerForm.setValue({inputtoken: token});
  }

  async obtenerUsuarios(){
    this.lista = await this.tokenService.lista();
  }

  async obtenerUsuariosAPI2Name(){
    var nombre = this.registerForm.getRawValue().nombre;
    this.lista = await this.tokenService.listaName(nombre);
    console.log('lista');
    console.log(JSON.stringify(this.lista));
  }
  async obtenerUsuariosAPI2Id(){
    this.lista = await this.tokenService.listaId();
    console.log('lista');
    console.log(JSON.stringify(this.lista));
  }
}
