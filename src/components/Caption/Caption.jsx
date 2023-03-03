import './Caption.scss';
import data from '../../data/video-details.json';

function Caption() {
    return (
        <p className="main-content__text">{data[0].description}</p>
    )
}

export default Caption;