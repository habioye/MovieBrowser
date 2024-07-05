import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movie: any;
  error: any;
  
  constructor(private route: ActivatedRoute, private movieService: OmdbService){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id){
      this.movieService.getMovieById(id).subscribe(data => {
        this.movie = data;
        console.log(this.movie)
        this.error = null;
      })
    } else {
      this.error = '404 No Found'
      this.movie = null;
    }
  }

}
