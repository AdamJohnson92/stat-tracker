import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header';
import HomePage from './pages/HomePage';
import PlayerPage from './pages/PlayerPage';
import StatsFormPage from './pages/StatsFormPage';
import NewPlayerPage from './pages/NewPlayerPage';
import DeletedPlayerPage from './pages/DeletedPlayer';
import PlayerAllGamesPage from './pages/PlayerAllGamesPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"> <Header /></header>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/:playerId' element={<PlayerPage />}/>
            <Route path='/stats-form' element={<StatsFormPage />}  />
            <Route path='/:playerId/all-games' element={<PlayerAllGamesPage />}/>
            <Route path='/new-player' element={<NewPlayerPage />} />
            <Route path='/deleted-player' element={<DeletedPlayerPage/>}/>
            <Route path='*' element={<NotFoundPage />}/>
          </Routes>
        <footer>
          <p className='footer'>Macadamia Inc. &copy; 2024</p>
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
