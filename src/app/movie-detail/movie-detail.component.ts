import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../omdb.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movie: any;
  error: any;
  isFavoriteMovie: boolean = false;
  
  constructor(private route: ActivatedRoute, private movieService: OmdbService, private favorite: FavoriteService){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.movieService.getMovieById(id).subscribe(data => {
        if (data.hasOwnProperty("Error")){
          this.error = "404: Incorrect IMDb ID";
          this.movie = null;
        } else {
          this.error = null;
          this.movie = data;
          this.isFavoriteMovie = this.isFavorited(id);
        }
      })
    } 
  }

  isFavorited(id: string) {
    let test = false;
    this.favorite.searchMovie(id).subscribe(data => {
      test = data
    })
    if (test){
      return true;
    } 
    return false;

  }

  toggleFavorite(): void {
    if (this.isFavoriteMovie){
      this.favorite.deleteMovie(this.movie.imdbID).subscribe(
        () => {
          this.isFavoriteMovie = false;
        },
        (error) => {
          console.log(error);
        }
      )
    } else {
      this.favorite.addMovie(this.movie.imdbID, this.movie.Poster).subscribe(
        () => {
          this.isFavoriteMovie = true;
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

}
