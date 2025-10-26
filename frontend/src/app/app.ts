import { Component, signal } from '@angular/core';
import { MovieInterface } from './core/interfaces/movie.interface';
import { GenreEnum } from './core/enums/genre.enum';
import { MovieCard } from "./components/movie-card/movie-card";

@Component({
  selector: 'app-root',
  imports: [MovieCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('movies_catalog');

  mockMovies: MovieInterface[] = [
    {
      id: 1,
      title: 'Начало',
      year: 2015,
      genre: [GenreEnum.ACTION],
      rating: 9,
    },
    {
      id: 2,
      title: 'Властелин колец',
      year: 2002,
      genre: [GenreEnum.SCI_FI],
      rating: 10,
    },
    {
      id: 3,
      title: 'Титаник',
      year: 1995,
      genre: [GenreEnum.DRAMA],
      rating: 8,
    },
  ];
}
