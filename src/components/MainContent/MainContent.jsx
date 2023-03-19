import "./MainContent.scss";
import CommentsSection from "../Comments/Comments";
import Reactions from "../Reactions/Reactions";
import Caption from "../Caption/Caption";
import Form from "../Form/Form";

function MainContent({ selectedVideo }) {
    let comments = 0;
    if (selectedVideo.comments && selectedVideo.comments.length > 0) {
        comments = selectedVideo.comments.length;
    }

    return (
        <main className='main-content'>
            <h1 className='main-content__title'>{selectedVideo.title}</h1>

            <Reactions selectedVideo={selectedVideo} />
            <Caption selectedVideo={selectedVideo} />

            <section className='conversation'>
                <h1 className='conversation__title'>{comments} Comments</h1>
                <Form />
                <section id='post'>
                    <CommentsSection selectedVideo={selectedVideo} />
                </section>
            </section>
        </main>
    );
}

export default MainContent;
