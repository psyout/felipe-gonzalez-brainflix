import thumb from '../../assets/images/Upload-video-preview.jpg';
import './VideoUpload.scss';
import { Link } from 'react-router-dom';

function VideoUpload(){
    return(
        <div className="video-container">
            <h1 className="video-container__title">Upload Video</h1>
            <h4 className="video-container__subtitle">Video Thumbnail</h4>
            <form action="" className="video-form">
                <img className="input-container__thumb" src={thumb} alt="upload thumbnail" />
                <div className="input-container">
                    <label className="input-container__label">Title your video</label>
                    <input className="input-container__input" type="text" placeholder="Add a title to your video" />
                    <label className="input-container__label">Add a video description</label>
                    <textarea className="input-container__textarea" type="text" id="comment" name="comment" required placeholder="Add a description to your video"></textarea>
                </div>
                <div className="video-footer">
                    <Link to="/" className="video-footer__button">
                        <button className="video-footer__button--title" type="submit">Publish</button>
                    </Link>
                    <button className="video-footer__button video-footer__button--cancel" type="submit">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default VideoUpload;