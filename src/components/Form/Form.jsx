import './Form.scss';
import image from '../../assets/images/mohan-muruge.jpg';

function Form() {
    
    return (
        <div className="comment-container">
            <div className="avatar-container">
                <img className="avatar-container__img" src={image} alt="avatar" />
            </div>
            <form className="form-container" id="form-container">
                <label className="form-container__title">Join the Conversation</label>
                <div className="form-container__input">
                    <textarea className="form-container__textarea" id="comment" name="comment" required placeholder="Add a new comment"></textarea>
                    <button className="form-container__submit" type="submit" value="Comment">Comment</button>
                </div>
            </form>
        </div>
    )
}

export default Form;