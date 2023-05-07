
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/List/List';
import Hotel from './pages/hotel/Hotel';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route exact path="/hotels"  element={<List/>}/>
          <Route exact path="/hotels/:id"  element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
