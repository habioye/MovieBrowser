import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"", component:MainComponent},

  {path:"**", redirectTo:""},
    { path: 'movie/:id', component: MovieDetailComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
