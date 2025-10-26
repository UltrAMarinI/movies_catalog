import { GenreEnum } from "../enums/genre.enum";
export interface MovieInterface {
  id: number;
  title: string;
  year: number;
  genre: GenreEnum[];
  rating: number;
  description?: string;
  poster?: string;
  director?: string;
  duration?: number;
  cast?: string[];
}
