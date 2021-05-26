import { BrowserRouter, Route } from "react-router-dom";
import MovieProvider from "./contexts/MovieContext";
import MovieList from "./pages/MovieList";
import StartPage from "./pages/StartPage";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieProvider>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/movie-list" component={MovieList} />
          <Route exact path="/movie-list/:id" component={MovieDetails} />
        </MovieProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
