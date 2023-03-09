import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from './pages/VideoPage';
import Home from './pages/Home';

function App() {

  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos/:id" element={<Home/>} />
            <Route path="/uploadvideo" element={<VideoPage />} />
          </Routes>
        </div>   
      </BrowserRouter>
  );
}

export default App;
