import './Caption.scss';

function Caption({ videoData }) {
    return (
        <p className="main-content__text">{videoData ? videoData.description : ''}</p>
    )
}

export default Caption;
