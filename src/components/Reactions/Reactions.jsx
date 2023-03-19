import "./Reactions.scss";
import likes from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";

function Reactions({ selectedVideo }) {
    const formattedDate = new Date(selectedVideo.timestamp).toLocaleDateString();

    return (
        <section className='details-container'>
            <div className='details-container__title'>
                <p className='details-container__text'>By {selectedVideo.channel}</p>
                <h4 className='details-container__date'>{formattedDate}</h4>
            </div>
            <div className='reactions-container'>
                <div className='reactions-container__views'>
                    <img className='reactions-container__img' src={views} alt='views-icon' />
                    <h4 className='reactions-container__text'>{selectedVideo.views}</h4>
                </div>
                <div className='reactions-container__likes'>
                    <img className='reactions-container__img' src={likes} alt='likes-icon' />
                    <h4 className='reactions-container__text'>{selectedVideo.likes}</h4>
                </div>
            </div>
        </section>
    );
}

export default Reactions;
