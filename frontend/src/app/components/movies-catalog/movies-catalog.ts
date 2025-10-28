import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  signal,
} from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { MovieList } from '../movie-list/movie-list';
import { MovieInterface } from '../../core/interfaces/movie.interface';
import { MovieSearch } from '../movie-search/movie-search';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movies-catalog',
  imports: [MovieList, MovieSearch, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './movies-catalog.html',
  styleUrl: './movies-catalog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MoviesCatalog implements OnInit {
  public moviesListArray: MovieInterface[] = [];

  readonly displayedMovies = signal<MovieInterface[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  constructor(
    private movieService: MovieService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  public onSearch(searchTerm: string): void {
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

  private loadMovies(): void {
    this.loading.set(true);
    this.error.set(null);

    this.movieService
      .getMovies()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (movies) => {
          this.moviesListArray = movies;
          this.displayedMovies.set(movies);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Не удалось загрузить фильмы. Попробуйте позже.');
          this.loading.set(false);
          console.error('Error loading movies:', err);
        },
      });
  }

  public retryLoad(): void {
    this.loadMovies();
  }
}
