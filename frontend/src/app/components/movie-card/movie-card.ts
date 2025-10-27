import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MovieInterface } from '../../core/interfaces/movie.interface';
import { MovieCardModal } from '../movie-card-modal/movie-card-modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
  standalone: true,
})
export class MovieCard {
  readonly dialog = inject(MatDialog);
  @Input() movieCard!: MovieInterface;

  // @Output() cardClick = new EventEmitter<MovieInterface>(); // Клик по карточке

  openDialog(): void {
    const dialogRef = this.dialog.open(MovieCardModal, {
      data: this.movieCard,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
