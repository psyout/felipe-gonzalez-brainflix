import './Comments.scss';

function CommentsSection(props) {
    const formattedDate = new Date(props.timestamp).toLocaleDateString();
    return (
        <article className="post-container" id="post-container">
            <div className="post-container__avatar">
                <span className="post-container__img"></span>
            </div>
            <article className="post-body">
                <div className="post-header">
                    <h4 className="post-header__title">{props.name}</h4>
                    <p className="post-header__text">{formattedDate}</p>
                </div>
                <div className="post-content">
                    <p className="post-content__text">{props.comment}</p>
                </div>
            </article>
        </article>
    )
}

export default CommentsSection;
