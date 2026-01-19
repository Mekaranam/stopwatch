import './index.css';
import Stopwatch from './Components/stopwatch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Stopwatch />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;