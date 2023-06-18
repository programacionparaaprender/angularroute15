import { Component, OnInit } from '@angular/core';
import { TioService } from './tio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tio } from 'src/app/commons/models/tio';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-actualizar-tio',
  templateUrl: './actualizar-tio.component.html',
  styleUrls: ['./actualizar-tio.component.css']
})
export class ActualizarTioComponent implements OnInit {
  nombre = '';
  email = '';
  password = '';
  registerForm: FormGroup;
  constructor(
    private tioService: TioService,
    private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.registerForm = this.fb.group({ 
      id:0,
      nombre: ['', Validators.required], 
      email: ['', Validators.maxLength(32)],
      password: ['', Validators.required]
    }); 
   }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params["id"];
    this.tioService.detalle(id).subscribe(
      data => {
        this.nombre = data.nombre;
        this.email = data.email;
        this.password = data.password;
      },
      err => {
        console.log(err.error.mensaje);
      }
    );
  }

  onUpdate(): void {
    if(!this.registerForm.valid){
      return;
    }
    const id = this.activatedRoute.snapshot.params["id"];
    const tio = new Tio(this.nombre, this.email, this.password);
    this.tioService.actualizar(tio, id).subscribe(
      data => {
        alert(data.mensaje);
        this.router.navigate(['/']);
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }

}
