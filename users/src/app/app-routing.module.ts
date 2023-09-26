import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotosListComponent } from './components/cmpt1-land/photos-list.component'
import { LoginComponent } from './components/cmpt5-login/login.component';
import { UserPreviewComponent } from './components/cmpt4-user-preview/user-preview.component';
import { UserComponent } from './components/cmpt3-user-register/user.component';
import { LandComponent } from "./components/cmpt2-users/land.component";

import { Cmpt14MVComponent } from './components/cmpt14-mv/cmpt14-mv.component';
import { Cmpt19EDUCACIONComponent } from './components/cmpt19-educacion/cmpt19-educacion.component';
import { Cmpt21APGComponent } from './components/cmpt21-ap-g/cmpt21-ap-g.component';
import { Cmpt20APPComponent } from './components/cmpt20-ap-p/cmpt20-ap-p.component';
import { Cmpt22APEComponent } from './components/cmpt22-ap-e/cmpt22-ap-e.component';
import { Cmpt23TESISComponent } from './components/cmpt23-tesis/cmpt23-tesis.component';
import { Cmpt25ADMISIONComponent } from './components/cmpt25-admision/cmpt25-admision.component';


const routes: Routes = [
  { path: 'Cmpt14MVComponent', component: Cmpt14MVComponent },


  { path: 'projects', component: Cmpt19EDUCACIONComponent },
  { path: 'Cmpt21APGComponent/:id', component: Cmpt21APGComponent },
  { path: 'sub_projects/:id', component: Cmpt20APPComponent },
  { path: 'sub_expositions/:id', component: Cmpt22APEComponent },
  { path: 'expositions', component: Cmpt23TESISComponent },
  { path: 'texts', component: Cmpt25ADMISIONComponent },



  {
    path: 'user/:id',
    component: UserPreviewComponent
  },
  {
    path: 'user',
    component: LandComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: UserComponent
  },


  {
    path: '',
    component: PhotosListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
