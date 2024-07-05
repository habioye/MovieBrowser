import { ValueOfChanges } from './../../../node_modules/@angular/cdk/schematics/update-tool/version-changes.d';
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { OmdbService } from '../omdb.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  list:string[] = ["Spider-Man: No Way Home", "Avengers: Endgame", "Avatar", "Star Wars: Episode IX - The Rise of Skywalker", "Jurassic World Dominion", "The Batman", "Top Gun: Maverick", "Doctor Strange in the Multiverse of Madness", "Aquaman and the Lost Kingdom", "The Lion King"];
  movieSearch:string = "";
  observeReturn:any;
  movies:any[] = [];
  constructor(private omdbService:OmdbService, private router:Router) {

    console.log("first");
    this.movies = []
    for(let i in this.list) {
      // console.log(i);
      this.omdbService.getMovieByTitle(this.list[i]).subscribe((data) => {
        // this.movies = data;
        this.movies.push(data);
        console.log(data);
      });


    }}

  // ngOninit():void {



  // }
  searchMovies(f:NgForm) {
    console.log("first");
    console.log(this.movieSearch);

    this.omdbService.searchMovies(this.movieSearch).subscribe((data) => {
      // this.movies = [];

      // data.array.forEach((element: any) => {
// if(element) {
//   this.movies.push(element);

// }
//       });
        this.movies = data.Search;

        console.log(data);


    });
    // this.omdbService.searchMovies(f.value.movieSearch).subscribe((data) => {
    //   console.log(data);
    //   this.movies = data;
    // });

  }
  // onSubmit(f:NgForm) {
  //   // this.searchMovies(f.value.movieSearch);
  // // this.observeReturn = this.omdbService.searchMovies(f.value.movieSearch);
  // //   console.log(this.observeReturn);

  // //   this.list = [];
  // //   this.observeReturn?.ValueOfChanges.forEach((value:any)=> {
  // //     this.list.push(value)
  // //   });
  // //   console.log(this.list);
  // }
  getMovieInfo() {

  }
  navigateToMovie(movieId: string): void {
    this.router.navigateByUrl(`/movie/${movieId}`).then(() => {
      window.location.reload();
    })
  }
}
