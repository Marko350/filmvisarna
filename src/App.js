import { BrowserRouter, Route } from "react-router-dom";
import MovieProvider from "./contexts/MovieContext";
import Booking from "./pages/Booking";
import MovieList from "./pages/MovieList";
import StartPage from "./pages/StartPage";
import MovieDetails from "./pages/MovieDetails";
import Start from "./pages/Start";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieProvider>
          <Navbar />
          <Route exact path="/booking/:showingId" component={Booking} />
          <Route exact path="/" component={StartPage} />
          <Route exact path="/movie-list" component={MovieList} />
          <Route exact path="/movie-list/:id" component={MovieDetails} />
          <Route exact path="/about" component={About} />
          <Route exact path="/test" component={Start} />
        </MovieProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
