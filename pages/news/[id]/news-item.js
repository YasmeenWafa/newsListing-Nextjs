import { withRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';
import newsStyle from '../../../styles/news.module.css';
import newsItemStyles from '../../../styles/newsItem.module.css';
import {AiFillDislike, AiFillLike} from 'react-icons/ai';
import moment from 'moment';
import Comment from '../../../components/comment';
import CommentForm from '../../../components/comment-form';
import SocialShare from '../../../components/social-share';

function NewsItem ({ router: { query } }) {

    const article = JSON.parse(query.article);
    const {
        id, 
        title,
        description,
        category,
        urlToImage, 
        publishedAt,
        content,
        author,
        source, 
        shares,
        comments
    } = article;

    return (
        <div>
            <div className={newsItemStyles.articleHeader}>
                <h1>{title}</h1>
                <p  className={newsStyle.author}>
                    By
                    <span> {author} </span> 
                    <span className={newsStyle.hours}>
                        Published on {moment.utc(publishedAt).local().format('MMM DD, YYYY')}
                    </span>  
                </p>
            </div>
            <div className={newsItemStyles.articleContainer}>
                <div className={newsItemStyles.articleShares}>
                    <SocialShare shares={shares}/>
                </div>
                <div className={newsItemStyles.articleContent}>
                    <img  style={{width: '100%'}} src={urlToImage}/>
                    <p>{description} {description} {description} {description} {description} {description} </p>
                    <div className={newsItemStyles.groupButtons}>
                        <button className={newsItemStyles.green} >
                            <AiFillLike className={newsItemStyles.icon}/> I found this helpful
                        </button>
                        <button>
                            <AiFillDislike className={newsItemStyles.icon}/>I did not find this helpful
                        </button>
                    </div>
                    <div className={newsItemStyles.commentsContainer}>
                        <h2 className={styles.subtitle}>Comments</h2>
                        {comments.map(comment =>
                            <Comment key={comment.id} comment={comment}/>
                        )}
                    </div>
                    <div className={newsItemStyles.formContainer}>
                        <h2 className={styles.subtitle}>Join the conversation</h2>
                       <CommentForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NewsItem);