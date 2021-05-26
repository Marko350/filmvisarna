import { BrowserRouter, Route } from "react-router-dom";
import Start from "./pages/Start";
import Navbar from "./components/Navbar";
import MovieProvider from './contexts/MovieContext';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieProvider>
          <Route exact path='/' component={Start} />
          <Route exact path='/movie-list' component={MovieList} />
        </MovieProvider>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
