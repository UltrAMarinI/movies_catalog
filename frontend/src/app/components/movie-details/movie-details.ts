import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetails implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');

    if (!movieId) {
      return;
    }

    this.movieService
      .getOne(movieId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((movie) => {
        console.log(movie);
      });
  }
}
