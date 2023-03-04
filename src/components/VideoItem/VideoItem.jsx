import './VideoItem.scss';

function VideoItem({ videoAside, handleVideoClick, videoData }) {
    return (
        <li className="video-list__item" onClick={() => { handleVideoClick(videoAside.id) }}>
            <img className="video-list__thumb" src={videoAside.image} alt={videoAside.description} title={videoAside.description} />
            <div className="video-details">
                <p className="video-details__text">{videoAside.title}</p>
                <h1 className="video-details__title">{videoAside.channel}</h1>
            </div>
        </li>
    )
}

export default VideoItem;