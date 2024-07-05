import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  apikey = '81d19024'; // Put your OMDb key here
  private uri = 'http://www.omdbapi.com/?apikey=' + this.apikey + '&';

  constructor(private http: HttpClient) {}

  getMovieById(id: string): Observable<any> {
    return this.http.get<any>(this.uri + 'i=' + id);
  }

  getMovieByTitle(title: string, year: number): Observable<any> {
    return this.http.get<any>(this.uri + 't=' + title + '&y=' + year);
  }

  searchMovies(movie: string): Observable<any> {
    return this.http.get<any>(this.uri + 's=' + movie + '&type=movie');
  }
}
