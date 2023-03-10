import './Comments.scss';

function CommentsSection({ selectedVideo }) {
  const formattedDate = new Date(selectedVideo.timestamp).toLocaleDateString();

  return (
    <>
      {selectedVideo.comments && selectedVideo.comments.map(comment => (
        <article className="post-container" key={comment.id}>
          <div className="post-container__avatar">
            <span className="post-container__img"></span>
          </div>
          <ul className="post-body">
            <li className="post-header">
              <h4 className="post-header__title">{comment.name}</h4>
              <p className="post-header__text">{formattedDate}</p>
            </li>
            <li className="post-content">
              <p className="post-content__text">{comment.comment}</p>
            </li>
          </ul>
        </article>
      ))}
    </>
  );
}

export default CommentsSection;
