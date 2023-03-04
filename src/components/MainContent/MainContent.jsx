import './MainContent.scss';
import CommentsSection from '../Comments/Comments';
import Reactions from '../Reactions/Reactions';
import Caption from '../Caption/Caption';
import Form from '../Form/Form';

function MainContent({ videoData }) {
    const { channel, timestamp, views, likes, comments, title } = videoData;

    return (
        <main className="main-content">
            <h1 className="main-content__title">{title}</h1>

            <Reactions channel={channel} timestamp={timestamp} views={views} likes={likes} />
            <Caption videoData={videoData} />

            <section className="conversation">
                <h1 className="conversation__title">{comments.length} Comments</h1>
                <Form />
                <section id="post">
                    {comments.map((comment) => (
                        <CommentsSection key={comment.id} name={comment.name} timestamp={comment.timestamp} comment={comment.comment} />
                    ))}
                </section>
            </section>
        </main>
    );
}

export default MainContent;
