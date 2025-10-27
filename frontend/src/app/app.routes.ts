import { Routes } from '@angular/router';
import { Urls } from './core/enums/urls.enum';
import { MovieDetails } from './components/movie-details/movie-details';
import { MoviesCatalog } from './components/movies-catalog/movies-catalog';

export const routes: Routes = [
  { path: Urls.catalog, component: MoviesCatalog },
  { path: `${Urls.details}/:id`, component: MovieDetails },
  { path: '**', redirectTo: Urls.catalog },
];
