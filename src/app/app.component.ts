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

  ngOnInit() {
    this.searchMovies('titanic');
    this.getMovieById('tt0120338');
    this.getMovieByTitle('1984');
  }

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
    this.service.getMovieByTitle('titanic').subscribe((data) => {
      console.log(data);
    });
  }
}
