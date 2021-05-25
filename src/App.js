import { BrowserRouter, Route } from 'react-router-dom';
import Start from './pages/Start';

import StartPage from "./pages/StartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route exact path='/' component={Start} /> */}
        <Route exact path='/' component={StartPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
