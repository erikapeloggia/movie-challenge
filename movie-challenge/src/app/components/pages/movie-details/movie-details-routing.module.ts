import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MovieDetailsComponent } from './movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieDetailsRoutingModule { }
