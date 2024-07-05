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
  }

  searchMovies(movie: string) {
    this.service.searchMovies(movie).subscribe((data) => {
      console.log(data);
    });
  }
}
