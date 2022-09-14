import Link from 'next/link';
import styles from '../styles/main.module.css';
import articleStyles from '../styles/article.module.css';
import moment from 'moment';
import {FaComment, FaShare} from 'react-icons/fa';

const Article = ({article, row, main, hours, hasComments, brief}) => {
    const {
        id, 
        title,
        description,
        category,
        urlToImage,
        publishedAt,
        author,
        shares,
        comments
    } = article;

    const direction =  row ? 'row' : 'column'
    return (
        <div key={id} className={articleStyles.article}
         style={{flexDirection: direction }}
         >
            <Link  href={{ pathname: `/news/${id}`, query: { article: JSON.stringify(article) } }}
            >
                <div style={{ width: row ? '30%': '100%' }} className={articleStyles.image} >
                <img  style={{width: '100%'}}
                 src={urlToImage}/>
                 </div>
            </Link>

                <div style={{marginTop: row ? 0 : '2rem', 
                            width: row ? '65%' : '100%'
                            }}
                            className={articleStyles.content}
                >
                    {category && !brief &&
                        <p  className={articleStyles.category}>{category}</p>
                    }

                    {!brief &&
                    <div className={styles.link}>
                        <Link  href={{ pathname: `/news/${id}`, query: { article: JSON.stringify(article) } }}
                            >
                                {main ?
                                <h1>{title}</h1>
                                :
                                <h3>{title}</h3>
                                }
                        </Link>
                    </div>
                    }
                    {brief &&
                    <div className={styles.link}>
                        <Link  href={{ pathname: `/news/${id}`, query: { article: JSON.stringify(article) } }}
                            >
                                <p className={articleStyles.title}>{title}</p>
                        </Link>
                    </div>
                    }
                    
                    {!brief &&
                        <p  className={articleStyles.description}>{description}</p>
                    }
                    {!brief &&
                        <p  className={articleStyles.author}>
                            By
                            <span> {author}</span> 
                            {hours &&
                                <span className={articleStyles.hours}> - {moment.utc(publishedAt).local().startOf('seconds').fromNow()}</span>
                            }
                        </p>
                    }
                    {brief && 
                        <p className={`${articleStyles.hours} ${articleStyles.dateTime}`}>
                            {moment.utc(publishedAt).local().format("hh:mm a on MMM DD")}
                        </p>
                        }
                    {hasComments && 
                        <div className={articleStyles.comments}> 
                            <span>
                                <FaShare style={{color: "#d0d0d0", verticalAlign: 'middle'}}/> {shares} </span>
                            <span>
                                <FaComment style={{color: "#d0d0d0",  verticalAlign: 'middle'}}/> {comments.length}</span>
                        </div>
                    }
                </div>
        </div>
    )
}

export default Article;