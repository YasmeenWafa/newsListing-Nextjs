import commentFormStyles from '../styles/newsItem.module.css';

const CommentForm = () => {
    return (
        <form className={commentFormStyles.commentForm}>
            <input className={commentFormStyles.name}
            placeholder="Name" type="text" id="name" name="name" required />
            <div className={commentFormStyles.emailBox}>
                <input  className={commentFormStyles.email}
                placeholder="Email" type="email" id="email" name="email" required />
                <label className={commentFormStyles.emailLabel} for="email">will not be published</label>
            </div>
            <textarea className={commentFormStyles.message} placeholder="Message" required/>
            <button type="submit" className={commentFormStyles.submit}>Send</button>
        </form>
    )
}

export default CommentForm;