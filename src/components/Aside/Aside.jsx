import './Aside.scss';
import VideoItem from '../VideoItem/VideoItem';
import data from '../../data/videos.json';

function AsideContent() {
    return (
        <aside className="video-aside">
            <h1 className="video-aside__title">Next Videos</h1>
            <ul className="video-list">
                {data.map(video => (
                    <VideoItem key={video.id} title={video.title} channel={video.channel} image={video.image} />
                ))}
            </ul>
        </aside>
    )
}

export default AsideContent;
