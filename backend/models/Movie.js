class Movie {
  constructor(id, title, year, genre, rating, description = '', poster = '', director = '', duration = 0, cast = []) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
    this.description = description;
    this.poster = poster;
    this.director = director;
    this.duration = duration;
    this.cast = cast;
  }
}

module.exports = Movie;