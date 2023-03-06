import './App.scss';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import AsideContent from './components/Aside/Aside';
import videoData from './data/video-details.json';
import videoList from './data/videos.json';
import { useState } from 'react';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  const handleVideoClick = (id) => {
    const video = videoData.find((video) => video.id === id);
    setSelectedVideo(video);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <Hero selectedVideo={selectedVideo} />
      <div className="main-container">
        <MainContent videoData={selectedVideo} />
        <AsideContent videoList={videoList} selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
      </div>
    </div>
  );
}

export default App;
