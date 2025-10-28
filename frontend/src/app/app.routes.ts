import { Routes } from '@angular/router';
import { Urls } from './core/enums/urls.enum';

export const routes: Routes = [
  {
    path: Urls.catalog,
    loadComponent: () =>
      import('./components/movies-catalog/movies-catalog').then(
        (m) => m.MoviesCatalog
      ),
  },
  {
    path: `${Urls.details}/:id`,
    loadComponent: () =>
      import('./components/movie-details/movie-details').then(
        (m) => m.MovieDetails
      ),
  },
  { path: '**', redirectTo: Urls.catalog },
];
