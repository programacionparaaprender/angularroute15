import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViejaComponent } from 'src/app/views/juegos/vieja/vieja.component';
import { TodoTasksComponent } from 'src/app/views/tasks/todo-tasks/todo-tasks.component';
import { GeocercaGoogleComponent } from 'src/app/views/geocerca-google/geocerca-google.component';


import { ListaTioComponent } from 'src/app/views/tio/lista-tio.component';
import { DetalleTioComponent } from 'src/app/views/tio/detalle-tio.component';
import { NuevoTioComponent } from 'src/app/views/tio/nuevo-tio.component';
import { ActualizarTioComponent } from 'src/app/views/tio/actualizar-tio.component';
import { LoginUsuariosComponent } from 'src/app/views/tio/login-usuarios/login-usuarios.component';

import { RegistrarUsuariosComponent } from 'src/app/views/tio/registrar-usuarios/registrar-usuarios.component';


import { BlockChainComponent } from 'src/app/views/blockchain/blockchain.component';

import { Tio } from 'src/app/commons/models/tio'
import { TokenJavaComponent } from 'src/app/views/accederwebtoken/tokenjava/tokenjava.component';

var usuario: Tio = {
  id: 1,
  nombre: "error",
  password: "123456",
  email: "error@gmail.com"
}

if(localStorage.getItem('login')){
  const json: string  | null = localStorage.getItem('login');
  if(json != null){
    usuario = JSON.parse(json);
    //console.log('login')
    //console.log(localStorage.getItem('login'))  
  }
}

const routes: Routes = [
  { path: '',  redirectTo: '/tokenjava', pathMatch: 'full' },
  {path: 'tokenjava' , component: TokenJavaComponent},
  {path: 'blockchain' , component: BlockChainComponent},
  {path: 'blockchain' , component: BlockChainComponent},
  {path: 'login' , component: LoginUsuariosComponent},
  {path: 'registro' , component: RegistrarUsuariosComponent},
  {
    path: 'vieja' , component: ViejaComponent
  },
  {
    path: 'tasks' , component: TodoTasksComponent
  },
  {
    path: 'geocerca' , component: GeocercaGoogleComponent
  },
  {path: 'lista', component: ListaTioComponent},
  {path: 'detalle/:id', component: DetalleTioComponent},
  {path: 'nuevo', component: NuevoTioComponent},
  {path: 'actualizar/:id', component: ActualizarTioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
