import './App.css';
import Home from './pages/home/Home';
import CharacterDetails from './pages/characterDetails/CharacterDetails';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
     <GlobalProvider>
        <BrowserRouter>
            <div className='app-container'>
              <Routes>
                  <Route path="/"  element={ <Home /> } />
                  <Route path="/character/:id"  element={ <CharacterDetails /> } />
              </Routes>
            </div>
        </BrowserRouter>
     </GlobalProvider>
  );
}

export default App;
