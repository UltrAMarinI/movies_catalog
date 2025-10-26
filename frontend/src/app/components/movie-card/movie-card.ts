import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieInterface } from '../../core/interfaces/movie.interface';
import { GenreEnum } from '../../core/enums/genre.enum';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
  standalone: true,
})
export class MovieCard {
  // @Input() movie!: MovieInterface[];

  // @Output() cardClick = new EventEmitter<MovieInterface>(); // Клик по карточке
  // @Output() favoriteToggle = new EventEmitter<number>(); // Добавление в избранное

  movie: MovieInterface = {
    id: 1,
    title: 'Начало',
    year: 2015,
    genre: [GenreEnum.ACTION],
    rating: 9,
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/600x900',
  };
}
