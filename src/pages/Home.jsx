import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/MainContent';
import AsideContent from '../components/Aside/Aside';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export const apiUrl = 'http://localhost:3001';

function Home() {
    const [videoList, setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});
    const [defaultVideo, setDefaultVideo] = useState({});

    let { id } = useParams();

    const getVideoDetails = useCallback(() => {
        axios
            .get(`${apiUrl}/videos/${id}`)
            .then((response) => {
                setSelectedVideo(response.data);
            })
            .catch((error) => console.log(error));
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const getVideoData = () => {
            axios
                .get(`${apiUrl}/videos`)
                .then((response) => {
                    console.log(response);
                    setVideoList(response.data);
                    setDefaultVideo(response.data[0]);
                    if (id === undefined) {
                        id = response.data[0].id;
                    }
                    getVideoDetails();
                })
                .catch((error) => console.log(error));
        };
        getVideoData();
    }, [getVideoDetails, id]);

    useEffect(() => {
        id && getVideoDetails();
    }, [getVideoDetails, id]);

    function handleLogoClick() {
        setSelectedVideo(defaultVideo);
    }

    return (
        <>
            <div className='container'>
                <Header handleLogoClick={handleLogoClick} />
            </div>
            <hr />
            <Hero selectedVideo={selectedVideo} />
            <div className='main-container'>
                <MainContent selectedVideo={selectedVideo} />
                <AsideContent videoList={videoList} selectedVideo={selectedVideo} />
            </div>
        </>
    );
}

export default Home;
