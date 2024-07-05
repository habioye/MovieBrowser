import { Component } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrl: './my-movie.component.css'
})
export class MyMovieComponent {
  myFMovies: any;
  isFavoriteMovie: boolean = false;

  constructor(private favorite: FavoriteService){}

  ngOnInit(): void {
    this.favorite.getAllMovie().subscribe(data => {
      this.myFMovies = data;
    })
  }

}
