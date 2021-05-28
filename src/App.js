import { BrowserRouter, Route } from "react-router-dom";
import MovieProvider from "./contexts/MovieContext";
import Booking from "./pages/Booking";
import MovieList from "./pages/MovieList";
import StartPage from "./pages/StartPage";
import Start from "./pages/Start";
import Navbar from "./components/Navbar";
import Booking from "./pages/Booking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieProvider>
          <Navbar />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/" component={StartPage} />
          <Route exact path="/movie-list" component={MovieList} />
          <Route exact path="/test" component={Start} />
        </MovieProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
