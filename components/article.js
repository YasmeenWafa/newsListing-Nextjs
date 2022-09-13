import Link from 'next/link';
import newsStyle from '../styles/news.module.css';
import moment from 'moment';
import {FaComment, FaShare} from 'react-icons/fa';

const Article = ({article, row, main, hours, hasComments}) => {
    const {id, title,
         description, category,
          urlToImage, publishedAt,
           content, author,
            source, shares,
             comments} = article;

    const direction =  row ? 'row' : 'column'
    return (
        <div key={id} className={newsStyle.article}
         style={{flexDirection: direction }}
         >
            <Link  href={{ pathname: `/news/${id}`, query: { article: JSON.stringify(article) } }}
            >
                <img  
                            style={{ width: row ? '30%': '100%' }}

                // style={{maxWidth: main ? '100%': '100%'}}
                 className={newsStyle.image} src={urlToImage}/>
            </Link>

                <div style={{marginTop: row ? 0 : '2rem', 
                            marginLeft: row ? '2rem' : 0, 
                            width: row ? '65%' : '100%'
                            }}
                            className={newsStyle.content}
                >
                    {category &&
                        <p  className={newsStyle.category}>{category}</p>
                    }
                        <Link  href={{ pathname: `/news/${id}`, query: { article: JSON.stringify(article) } }}
                        >
                            {main ?
                            <h1 className={newsStyle.title}>{title}</h1>
                            :
                            <h3 className={newsStyle.title}>{title}</h3>
                            }
                        </Link>
                    <p  className={newsStyle.description}>{description}</p>
                    <p  className={newsStyle.author}>
                        By 
                        <span> {author}</span> 
                        {hours && <span className={newsStyle.hours}> - {moment.utc(publishedAt).local().startOf('seconds').fromNow()}</span>}
                    </p>
                    {hasComments && 
                        <div className={newsStyle.comments}> 
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