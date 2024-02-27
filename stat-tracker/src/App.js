import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Stat Tracker</h1>
          <Routes>
            <Route path='/' element={<HomePage />}/>
          </Routes>

        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
