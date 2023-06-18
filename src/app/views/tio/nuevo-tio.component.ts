import { Component, OnInit } from '@angular/core';
import { Tio } from 'src/app/commons/models/tio';
import { TioService } from './tio.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-nuevo-tio',
  templateUrl: './nuevo-tio.component.html',
  styleUrls: ['./nuevo-tio.component.css']
})
export class NuevoTioComponent {
  tio: Tio;
  nombre = '';
  email = '';
  password = '';
  registerForm: FormGroup;
  constructor(private tioService: TioService, 
    private fb: FormBuilder, 
    private router: Router) { 
    this.tio = new Tio("", "", "");
    this.registerForm = this.fb.group({ 
      id:0,
      nombre: ['', Validators.required], 
      email: ['', Validators.maxLength(32)],
      password: ['', Validators.required]
    }); 
  }
  onCreate(): void {
    this.tio = new Tio(this.nombre, this.email, this.password);
    this.tioService.nuevo(this.tio).subscribe(
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
