import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import LayoutMain from './components/shared/layoutMain';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayoutMain />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
