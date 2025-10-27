import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { MovieList } from '../movie-list/movie-list';
import { MovieInterface } from '../../core/interfaces/movie.interface';
import { MovieSearch } from '../movie-search/movie-search';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movies-catalog',
  imports: [MovieList, MovieSearch],
  templateUrl: './movies-catalog.html',
  styleUrl: './movies-catalog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MoviesCatalog implements OnInit {
  moviesListArray: MovieInterface[] = [];

  readonly displayedMovies = signal<MovieInterface[]>([]);

  constructor(
    private movieService: MovieService,
    private destroyRef: DestroyRef
  ) {}

  performSearch(term: string): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((movies) => {
        this.moviesListArray = movies;
        this.displayedMovies.set(movies);
      });
  }

  onSearch(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.displayedMovies.set(this.moviesListArray);
      return;
    }

    const term = searchTerm.toLowerCase().trim();
    const foundFilms = this.moviesListArray.filter(
      (movie) =>
        movie.title.toLowerCase().includes(term) ||
        movie.genre.some((genre) => genre.toLowerCase().includes(term))
    );
    this.displayedMovies.set(foundFilms);
  }
}
