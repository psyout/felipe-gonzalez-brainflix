import './MainContent.scss';
import image from '../../assets/images/mohan-muruge.jpg';
import likes from '../../assets/icons/likes.svg';
import views from '../../assets/icons/views.svg';

function MainContent() {

    return (
        <main className="main-content">
            <h1 className="main-content__title">BMX Rampage: 2021 Highlights</h1>
            <section className="details-container">
                <div className="details-container__title">
                    <p className="details-container__text">By Red Crow</p>
                    <h4 className="details-container__date">07/11/2021</h4>
                </div>
                <div className="reactions-container">
                    <div className="reactions-container__views">
                        <img className="reactions-container__img" src={views} alt="views-icon" />
                        <h4 className="reactions-container__text">1,001,023</h4>
                    </div>
                    <div className="reactions-container__likes">
                        <img className="reactions-container__img" src={likes} alt="likes-icon" />
                        <h4 className="reactions-container__text">110,985</h4>
                    </div>
                </div>
            </section>
            <p className="main-content__text">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>

            <section class="conversation">
                <h1 class="conversation__title">3 Comments</h1>
                <div class="comment-container">
                    <div class="avatar-container">
                        <img class="avatar-container__img" src={image} alt="" />
                    </div>
                    <form class="form-container" id="form-container">
                        <label class="form-container__title" for="comment">Join the Conversation</label>
                        <div class="form-container__input">
                            <textarea class="form-container__textarea" id="comment" name="comment" required placeholder="Add a new comment"></textarea>
                            <button class="form-container__submit" type="submit" value="Comment">Comment</button>
                        </div>
                    </form>
                </div>
                <section id="post">
                    <article className="post-container" id="post-container">
                        <div className="post-container__avatar">
                            <span className="post-container__img"></span>
                        </div>
                        <article className="post-body">
                            <div className="post-header">
                                <h4 className="post-header__title">Connor Walton</h4>
                                <p className="post-header__text">02/17/2021</p>
                            </div>
                            <div className="post-content">
                                <p className="post-content__text">This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.</p>
                            </div>
                        </article>
                    </article>

                    <article className="post-container" id="post-container">
                        <div className="post-container__avatar">
                            <span className="post-container__img"></span>
                        </div>
                        <article className="post-body">
                            <div className="post-header">
                                <h4 className="post-header__title">Connor Walton</h4>
                                <p className="post-header__text">02/17/2021</p>
                            </div>
                            <div className="post-content">
                                <p className="post-content__text">This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.</p>
                            </div>
                        </article>
                    </article>
                </section>
            </section>
        </main >




    );
}

export default MainContent;