import { BrowserRouter, Route } from 'react-router-dom';
import Start from './pages/Start';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Start} />
      </BrowserRouter>
    </div>
  );
}

export default App;
