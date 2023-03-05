import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

//import { storageSyncMetaReducer } from 'ngrx-store-persist';
//declare module 'ngrx-store-persist';

import { taskReducer } from 'src/app/commons/store/tasks.reducer';
import { userReducer } from 'src/app/commons/store/users.reducer';
import { loginReducer } from 'src/app/commons/store/login.reducer';


import { AddTaskComponent } from 'src/app/views/tasks/add-task/add-task.component';
import { ListTasksComponent } from 'src/app/views/tasks/list-tasks/list-tasks.component';
import { ViejaComponent } from 'src/app/views/juegos/vieja/vieja.component';
import { environment } from 'src/app/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoTasksComponent } from 'src/app/views/tasks/todo-tasks/todo-tasks.component';

import { BlockChainComponent } from 'src/app/views/blockchain/blockchain.component';



import { HttpClientModule } from '@angular/common/http';

localStorage.setItem('URL', 'https://localhost:44382/');


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeocercaGoogleComponent } from 'src/app/views/geocerca-google/geocerca-google.component';

import { AgmCoreModule } from '@agm/core';


import { MenuComponent } from 'src/app/views/menu/menu.component';
import { ListaTioComponent } from 'src/app/views/tio/lista-tio.component';
import { NuevoTioComponent } from 'src/app/views/tio/nuevo-tio.component';
import { DetalleTioComponent } from 'src/app/views/tio/detalle-tio.component';
import { ActualizarTioComponent } from 'src/app/views/tio/actualizar-tio.component';
import { LoginUsuariosComponent } from 'src/app/views/tio/login-usuarios/login-usuarios.component';
import { RegistrarUsuariosComponent } from 'src/app/views/tio/registrar-usuarios/registrar-usuarios.component';
import { TokenJavaComponent } from 'src/app/views/accederwebtoken/tokenjava/tokenjava.component';

import { TokenizedInterceptorProviders } from "src/app/commons/services/tokenized.interceptor.service";
import { EjemploComponent } from 'src/app/views/ejemplo/ejemplo.component';
@NgModule({
  declarations: [
    TokenJavaComponent,
    AppComponent,
    AddTaskComponent,
    ViejaComponent,
    ListTasksComponent,
    TodoTasksComponent,
    GeocercaGoogleComponent,
    MenuComponent,
    ListaTioComponent,
    NuevoTioComponent,
    DetalleTioComponent,
    LoginUsuariosComponent,
    ActualizarTioComponent,
    RegistrarUsuariosComponent,
    BlockChainComponent,
    EjemploComponent
  ],
  imports: [
    
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZktO_JnnvrY4BnD2IyZo8PqNXiDTWP1w'
    }),
    /* StoreModule.forRoot({
      tasks: taskReducer,
      users: userReducer,
      login: loginReducer
    }), */
    /* 
    StoreModule.forRoot({
      tasks: taskReducer,
      users: userReducer,
      login: loginReducer
    }, { 
      metaReducers: [storageSyncMetaReducer] 
    }),*/
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule, 
    MatFormFieldModule
  ],
  providers: [
    TokenizedInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
