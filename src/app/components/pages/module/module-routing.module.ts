import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { NewMomentComponent } from '../new-moment/new-moment.component';
import { MomentComponent } from '../moment/moment.component';
import { EditMomentComponent } from '../edit-moment/edit-moment.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,  
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: 'moment/new',
    pathMatch: 'full',
    component: NewMomentComponent, 
  },
  {
    path: 'moment/edit/:id',
    pathMatch: 'full',
    component: EditMomentComponent
  },
  {
    path: 'moment/:id',
    pathMatch: 'full',
    component: MomentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
