import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/MainContent';
import AsideContent from '../components/Aside/Aside';
import { useState, useEffect } from 'react';
import axios from 'axios';
export const apiUrl = "https://project-2-api.herokuapp.com";
export const apiKey = "0aeb84f0-4ddc-452d-96c3-43be45d310de";

function Home() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/videos?api_key=${apiKey}`)
      .then(response => {
        setVideoList(response.data);
        if (response.data.length > 0) {
          setSelectedVideo(response.data[0]);
        }
      })
      .catch(error => console.log(error));
  }, []);

  const handleVideoClick = (id) => {
    axios.get(`${apiUrl}/videos/${id}?api_key=${apiKey}`)
      .then(response => setSelectedVideo(response.data))
      .catch(error => console.log(error));
    window.scrollTo(0, 0);
  };

  

  return (
    <>
    <div className="container">
      <Header />
    </div>
    <hr />
    <Hero selectedVideo={selectedVideo} />
    <div className="main-container">
      <MainContent videoData={selectedVideo} />
      <AsideContent videoList={videoList} selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
    </div>
  </>
  );
}

export default Home;