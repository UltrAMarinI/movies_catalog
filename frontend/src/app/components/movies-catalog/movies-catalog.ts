import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { MovieList } from '../movie-list/movie-list';
import { MovieInterface } from '../../core/interfaces/movie.interface';

@Component({
  selector: 'app-movies-catalog',
  imports: [MovieList],
  templateUrl: './movies-catalog.html',
  styleUrl: './movies-catalog.scss',
})
export class MoviesCatalog implements OnInit {
  moviesListArray: MovieInterface[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      console.log(movies);
      this.moviesListArray = [...movies];
    });
  }
}
