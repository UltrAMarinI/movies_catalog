const express = require('express');
const cors = require('cors');
const movies = require('./data/movies');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/movies', (req, res) => {
  try {

    res.json({
      movies: movies,
      total: movies.length
    });
    
  } catch (error) {
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

app.get('/api/movies/:id', (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    
    if (isNaN(movieId)) {
      return res.status(400).json({ 
        error: 'Invalid movie ID',
        message: 'Movie ID must be a number' 
      });
    }
    
    const movie = movies.find(m => m.id === movieId);
    
    if (!movie) {
      return res.status(404).json({ 
        error: 'Movie not found',
        message: `Movie with ID ${movieId} does not exist` 
      });
    }
    
    res.json(movie);
    
  } catch (error) {
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

app.get('/', (req, res) => {
  res.json({ 
    message: 'Movie API is running!',
    endpoints: {
      getAllMovies: 'GET /api/movies',
      getMovieById: 'GET /api/movies/:id'
    }
  });
});

app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found',
    message: `Route ${req.originalUrl} does not exist` 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📚 API endpoints:`);
  console.log(`   GET /api/movies - Get all movies`);
  console.log(`   GET /api/movies/:id - Get movie by ID`);
});

module.exports = app;