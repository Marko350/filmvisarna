import { BrowserRouter, Route } from 'react-router-dom';
import MovieProvider from './contexts/MovieContext';
import MovieList from './pages/MovieList';
import Start from './pages/Start';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieProvider>
          <Route exact path='/' component={Start} />
          <Route exact path='/movie-list' component={MovieList} />
        </MovieProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
