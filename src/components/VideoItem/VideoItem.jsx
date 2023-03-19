import "./VideoItem.scss";

function VideoItem({ video }) {
    return (
        <li className='video-list__item'>
            <img className='video-list__thumb' src={video.image} alt={video.description} title={video.description} />
            <div className='video-details'>
                <p className='video-details__text'>{video.title}</p>
                <h1 className='video-details__title'>{video.channel}</h1>
            </div>
        </li>
    );
}

export default VideoItem;
