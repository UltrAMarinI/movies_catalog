import { ChangeDetectionStrategy, Component, Input, WritableSignal } from '@angular/core';
import { MovieInterface } from '../../core/interfaces/movie.interface';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movie-list',
  imports: [MovieCard],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieList {
  @Input() moviesArray!: WritableSignal<MovieInterface[]>;
}
