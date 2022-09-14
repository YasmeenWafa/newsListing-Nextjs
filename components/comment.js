import commentStyles from '../styles/comment.module.css';
import {BsFillPersonFill} from 'react-icons/bs'
import moment from 'moment';

const Comment = ({comment}) => {
    const {
        id,
        author,
        publishedAt,
        content
    }  =  comment;
    return (
        <div className={commentStyles.comment}>
            <div className={commentStyles.pictureContainer}>
                <div className={commentStyles.picture}>
                    <BsFillPersonFill className={commentStyles.icon}/>
                </div>
            </div>
            <div className={commentStyles.content}>
                <div className={commentStyles.header}>
                    <span style={{marginRight: '1rem'}}>{author}</span>
                    <div style={{color: '#bfbfc3', display:'inline-block'}}>
                        <span style={{marginRight: '1rem'}}>{moment.utc(publishedAt).local().format('MMM DD, YYYY')}  </span>
                        <a href="#">Reply</a>
                    </div>
                </div>
                <p>{content}</p>
            </div>

        </div>
    );
}

export default Comment;