import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  signal,
} from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MovieInterface } from '../../core/interfaces/movie.interface';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';
import { Urls } from '../../core/enums/urls.enum';

@Component({
  selector: 'app-movie-details',
  imports: [MatProgressSpinnerModule, MatIcon],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetails implements OnInit {
  public movieDetail!: MovieInterface;
  public readonly loading = signal(true);
  public readonly error = signal<string | null>(null);

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId) {
      this.loadDetails(movieId);
    }
  }

  public closeDetail(): void {
    this.router.navigate([Urls.catalog]);
  }

  private loadDetails(id: string): void {
    this.loading.set(true);
    this.error.set(null);

    this.movieService
      .getMovieById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (movie) => {
          this.movieDetail = movie;
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Ошибка загрузки. Попробуйте перезагрузить страницу.');
          this.loading.set(false);
        },
      });
  }
}
