import { Component } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { OmdbService } from '../omdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrl: './my-movie.component.css'
})
export class MyMovieComponent {
  myFMovies: any;
  isFavoriteMovie: boolean = false;

  constructor(private favorite: FavoriteService, private movieService: OmdbService, private router: Router){}

  ngOnInit(): void {
    this.favorite.getAllMovie().subscribe(data => {
      this.myFMovies = data;
    })
  }

  navigateToMovie(movieId: string): void {
    this.router.navigateByUrl(`/movie/${movieId}`).then(() => {
      window.location.reload();
    })
  }



}
