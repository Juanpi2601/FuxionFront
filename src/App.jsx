import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Homepage from './Pages/Homepage';

function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
      <main>
        <Routes>
        <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
