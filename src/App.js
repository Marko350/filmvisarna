import { BrowserRouter, Route } from "react-router-dom";
import Start from "./pages/Start";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Start} />
      </BrowserRouter>
    </div>
  );
}

export default App;
