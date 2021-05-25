import { BrowserRouter, Route } from "react-router-dom";
import Start from "./pages/Start";
import Navbar from "./components/Navbar";
import MovieList from './pages/MovieList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Start} />
        <Route exact path='/movie-list' component={MovieList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
