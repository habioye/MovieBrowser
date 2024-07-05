import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiurl = "http://localhost:3000/favorite"

  constructor(private http: HttpClient){}

  addMovie(movieId: string, poster: string): Observable<any> {
    const movie = {id: movieId, poster: poster}
    return this.http.post<any>(this.apiurl, movie, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }

  deleteMovie(movieId: string): Observable<any> {
    const url = `${this.apiurl}/${movieId}`
    return this.http.delete<any>(url);
  }

  searchMovie(movieId: string): Observable<any>{
    const url = `${this.apiurl}/${movieId}`
    return this.http.get<any>(url).pipe(
      catchError(() => {
        return of(null);
      })
    );
  }

  getAllMovie(): Observable<any[]>{
    return this.http.get<any[]>(this.apiurl)
  }

}
