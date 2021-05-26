import { BrowserRouter, Route } from "react-router-dom";
import MovieProvider from "./contexts/MovieContext";
import MovieList from "./pages/MovieList";
import StartPage from "./pages/StartPage";
import Start from "./pages/Start";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieProvider>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/movie-list" component={MovieList} />
          <Route exact path="/test" component={Start} />
        </MovieProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
