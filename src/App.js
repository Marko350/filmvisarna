import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import Start from './pages/Start';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Start} />
        <Route exact path='/movie-list' component={MovieList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
