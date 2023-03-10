import './Caption.scss';

function Caption({ selectedVideo }) {
    return (
        <p className="main-content__text">{selectedVideo.description}</p>
    )
}

export default Caption;
