import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dash from './components/dash';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/first100k" element={ <Home /> } />
          <Route path="/login" element={ < Dash /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
