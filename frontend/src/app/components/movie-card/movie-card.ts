import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { MovieInterface } from '../../core/interfaces/movie.interface';
import { MovieCardModal } from '../movie-card-modal/movie-card-modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCard {
  readonly dialog = inject(MatDialog);

  @Input() movieCard!: MovieInterface;

  openDialog(): void {
    this.dialog.open(MovieCardModal, {
      data: this.movieCard,
    });
  }
}
