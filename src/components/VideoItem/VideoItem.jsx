import './VideoItem.scss';

function VideoItem({ image, title, channel, description }) {
    return (
        <li className="video-list__item">
            <img className="video-list__thumb" src={image} alt={description} />
            <div className="video-details">
                <p className="video-details__text">{title}</p>
                <h1 className="video-details__title">{channel}</h1>
            </div>
        </li>
    )
}

export default VideoItem;