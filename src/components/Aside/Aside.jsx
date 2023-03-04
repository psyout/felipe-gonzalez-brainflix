import { useState } from 'react';
import './Aside.scss';
import VideoItem from '../VideoItem/VideoItem';


function AsideContent({ videoList, selectedVideo, handleVideoClick }) {
    useState(() => {
        const foundVideo = videoList.find((video) => video.id === selectedVideo.id);
        if (!foundVideo) {
            handleVideoClick(videoList[0].id);
        }
    }, [videoList, selectedVideo, handleVideoClick]);

    return (
        <aside className="video-aside">
            <h1 className="video-aside__title">Next Videos</h1>
            <ul className="video-list">
                {videoList
                    .filter((video) => video.id !== selectedVideo.id)
                    .map(video => (
                        <VideoItem key={video.id} videoAside={video} handleVideoClick={handleVideoClick} />
                    ))
                }
            </ul>
        </aside>
    )
}

export default AsideContent;
