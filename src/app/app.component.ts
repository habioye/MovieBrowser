import { Component } from '@angular/core';
import { OmdbService } from './omdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MovieBrowser';

  constructor(private service: OmdbService) {}


  searchMovies(movie: string) {
    this.service.searchMovies(movie).subscribe((data) => {
      console.log(data);
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
}
