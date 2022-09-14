import commentFormStyles from '../styles/newsItem.module.css';

const CommentForm = () => {
    return (
        <div className={commentFormStyles.commentForm}>
            <input className={commentFormStyles.name}
            placeholder="Name" type="text" id="name" name="name" required />
            <div className={commentFormStyles.emailBox}>
                <input  className={commentFormStyles.email}
                placeholder="Email" type="email" id="email" name="email" required />
                <label className={commentFormStyles.emailLabel} for="email">will not be published</label>
            </div>
            <textarea className={commentFormStyles.message} placeholder="Message" required/>
        </div>
    )
}

export default CommentForm;