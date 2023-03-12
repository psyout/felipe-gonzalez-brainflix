import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/MainContent';
import AsideContent from '../components/Aside/Aside';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export const apiUrl = "https://project-2-api.herokuapp.com";
export const apiKey = "0aeb84f0-4ddc-452d-96c3-43be45d310de";

function Home() {
  
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  let {id} = useParams()

  function getVideoData (){
    axios.get(`${apiUrl}/videos?api_key=${apiKey}`)
      .then((response) => {
        // console.log(response)
        setVideoList(response.data);
        if(id === undefined) {
          id = response.data[0].id;
        }
        getVideoDetails();
      })
      .catch(error => console.log(error));
  }

  function getVideoDetails (){
		axios.get(`${apiUrl}/videos/${id}?api_key=${apiKey}`)
			.then((response) => { 
        // console.log(response)
        setSelectedVideo(response.data)
      })
      .catch(error => console.log(error));
    window.scrollTo(0, 0);
	}

  useEffect(() => {
    getVideoData();
  }, []);

	useEffect(()=>{
		id && getVideoDetails()
	},[id])

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <hr />
      <Hero selectedVideo={selectedVideo} />
      <div className="main-container">
        <MainContent selectedVideo={selectedVideo} />
        <AsideContent videoList={videoList} selectedVideo={selectedVideo}/>
      </div>
    </>
  );
}

export default Home;