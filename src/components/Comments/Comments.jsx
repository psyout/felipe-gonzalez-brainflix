import './Comments.scss';

function CommentsSection({ name, timestamp, comment }) {
    const formattedDate = new Date(timestamp).toLocaleDateString();
    return (
      <article className="post-container" id="post-container">
        <div className="post-container__avatar">
          <span className="post-container__img"></span>
        </div>
        <ul className="post-body">
          <li className="post-header">
            <h4 className="post-header__title">{name}</h4>
            <p className="post-header__text">{formattedDate}</p>
          </li>
          <li className="post-content">
            <p className="post-content__text">{comment}</p>
          </li>
        </ul>
      </article>
    );
  }
  
  export default CommentsSection;
  