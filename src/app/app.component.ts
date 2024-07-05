import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { OmdbService } from './omdb.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MovieBrowser';
  movies: any;
  constructor(private service: OmdbService, private router: Router) {}


  searchMovies(movie: string) {

    this.service.searchMovies(movie).subscribe((data) => {
      console.log(data);
      this.movies = data;
    });
  }
  getMovieById(id: string) {
    this.service.getMovieById(id).subscribe((data) => {
      console.log(data);
    });
  }

  getMovieByTitle(title: string) {
    this.service.getMovieByTitle(title).subscribe((data) => {
      console.log(data);
    });
  }
  goToMovie(movieId:string) {
    this.router.navigate(['/movie',movieId]);
    return;

  }
}
