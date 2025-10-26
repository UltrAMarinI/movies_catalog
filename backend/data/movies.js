const Movie = require('../models/Movie');

const movies = [
  new Movie(
    1,
    "Inception",
    2010,
    ["Sci-Fi", "Action", "Thriller"],
    8.8,
    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "https://example.com/posters/inception.jpg",
    "Christopher Nolan",
    148,
    ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
  ),
  new Movie(
    2,
    "The Shawshank Redemption",
    1994,
    ["Drama"],
    9.3,
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "https://example.com/posters/shawshank.jpg",
    "Frank Darabont",
    142,
    ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
  ),
  new Movie(
    3,
    "The Dark Knight",
    2008,
    ["Action", "Crime", "Drama"],
    9.0,
    "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "https://example.com/posters/dark-knight.jpg",
    "Christopher Nolan",
    152,
    ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
  ),
  new Movie(
    4,
    "Pulp Fiction",
    1994,
    ["Crime", "Drama"],
    8.9,
    "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "https://example.com/posters/pulp-fiction.jpg",
    "Quentin Tarantino",
    154,
    ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
  ),
  new Movie(
    5,
    "Forrest Gump",
    1994,
    ["Drama", "Romance"],
    8.8,
    "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    "https://example.com/posters/forrest-gump.jpg",
    "Robert Zemeckis",
    142,
    ["Tom Hanks", "Robin Wright", "Gary Sinise"]
  ),
  new Movie(
    6,
    "The Matrix",
    1999,
    ["Action", "Sci-Fi"],
    8.7,
    "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    "https://example.com/posters/matrix.jpg",
    "Lana Wachowski, Lilly Wachowski",
    136,
    ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  ),
  new Movie(
    7,
    "Goodfellas",
    1990,
    ["Biography", "Crime", "Drama"],
    8.7,
    "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    "https://example.com/posters/goodfellas.jpg",
    "Martin Scorsese",
    146,
    ["Robert De Niro", "Ray Liotta", "Joe Pesci"]
  ),
  new Movie(
    8,
    "Interstellar",
    2014,
    ["Adventure", "Drama", "Sci-Fi"],
    8.6,
    "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "https://example.com/posters/interstellar.jpg",
    "Christopher Nolan",
    169,
    ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
  )
];

module.exports = movies;