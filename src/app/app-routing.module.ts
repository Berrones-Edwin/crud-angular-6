import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { UsersComponent } from "./users/users.component";
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from "./edituser/edituser.component";
import { DeleteuserComponent } from "./deleteuser/deleteuser.component";

const routes: Routes = [
  { path: '',pathMatch:'full',component:UsersComponent},
  { path:'adduser', component:AdduserComponent },
  { path:'edituser', component:EdituserComponent },
  { path:'deleteuser', component:DeleteuserComponent },
  //Si pone una ruta incorrecta lo redirigmos al home
  { path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
