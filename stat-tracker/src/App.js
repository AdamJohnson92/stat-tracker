import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header';
import HomePage from './pages/HomePage';
import PlayerPage from './pages/PlayerPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
         <Header />
          
        </header>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/:playerId' element={<PlayerPage />}/>
          </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
