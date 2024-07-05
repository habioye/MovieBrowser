import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

const routes: Routes = [
    { path: 'movie/:id', component: MovieDetailComponent},
    { path: 'mymovies', component: MyMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
