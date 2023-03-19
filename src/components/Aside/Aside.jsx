import { Link } from "react-router-dom";
import "./Aside.scss";
import VideoItem from "../VideoItem/VideoItem";

function AsideContent({ selectedVideo, videoList }) {
  return (
    <aside className="video-aside">
      <h1 className="video-aside__title">Next Videos</h1>
      <ul className="video-aside__list">
        {videoList
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => (
            <Link key={video.id} to={`/${video.id}`}>
              <VideoItem video={video} />
            </Link>
          ))}
      </ul>
    </aside>
  );
}

export default AsideContent;
