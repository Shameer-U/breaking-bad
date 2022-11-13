import './App.css';
import Home from './pages/home/Home';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
     <GlobalProvider>
        <BrowserRouter>
            <div className='app-container'>
              <Routes>
                  <Route path="/"  element={ <Home /> } />
              </Routes>
            </div>
        </BrowserRouter>
     </GlobalProvider>
  );
}

export default App;
