import './Aside.scss';
import thumb from '../../assets/images/thumb1.jpg';

function AsideContent() {

    return (
        <aside className="video-aside">
            <h1 className="video-aside__title">Next Videos</h1>
            <ul className="video-list">
                <li className="video-list__item">
                    <img className="video-list__thumb" src={thumb} alt="" />
                    <div className="video-details">
                        <p className="video-details__text">Become A Travel Pro In One Easy Lesson</p>
                        <h1 className="video-details__title">Todd Welch</h1>
                    </div>
                </li>

                <li className="video-list__item">
                    <img className="video-list__thumb" src={thumb} alt="" />
                    <div className="video-details">
                        <p className="video-details__text">Become A Travel Pro In One Easy Lesson</p>
                        <h1 className="video-details__title">Todd Welch</h1>
                    </div>
                </li>

                <li className="video-list__item">
                    <img className="video-list__thumb" src={thumb} alt="" />
                    <div className="video-details">
                        <p className="video-details__text">Become A Travel Pro In One Easy Lesson</p>
                        <h1 className="video-details__title">Todd Welch</h1>
                    </div>
                </li>
            </ul>
        </aside >
    )
}

export default AsideContent;