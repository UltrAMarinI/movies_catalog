import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieInterface } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieInterface[]> {
    return this.http.get<MovieInterface[]>(`${this.api}/api/movies`);
  }

  getMovieById(id: string): Observable<MovieInterface> {
    return this.http.get<MovieInterface>(`${this.api}/api/movies/${id}`);
  }
}
