import { useEffect, useState } from "react"
import {uuid} from 'uuidv4';
import styles from '../../styles/Home.module.css'
import newsStyles from '../../styles/news.module.css'
import Layout from "../../layout";
import Article from "../../components/article";
import RecentPosts from "../../components/recent-posts";
import MostPopular from "../../components/most-popular";
import Newsletter from "../../components/newsletter";
import FollowUs from "../../components/follow-us";
import NewsColumn from "../../components/news-column";

function News () {
    
    const [articles, setArticles] = useState([]);

    const getNews = async () => {
    try {
        const res = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4`
        );
        const data = await res.json();
        // console.log(data); 
            data.articles.map(item => {item.id = uuid();
                 item.category="Tech"
                 item.shares = "23"
                 item.comments = [{
                    id: uuid(),
                    author: 'Olya', 
                    publishedAt: item.publishedAt,
                    content: 'If you have too man tasks to do, or are scattered durina vour workday  breathe. It will help bring you into focus, to concentrate on the most important task you need to be focusing on right now'
                },
                {
                    id: uuid(),
                    author: 'Olya', 
                    publishedAt: item.publishedAt,
                    content: 'If you have too man tasks to do, or are scattered durina vour workday  breathe. It will help bring you into focus, to concentrate on the most important task you need to be focusing on right now'
                }
            ]
                })
            setArticles(data.articles)
    } catch (err) {
        console.log(err);
    }
    };

    useEffect(() => {
        // if(articles.length === 0)
        getNews();
    }, [])
    
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Latest News</h1>
            <div className={newsStyles.mainNewsOuter}>
                {/* flex */}
                <div className={newsStyles.mainNews}>
                    {/* articles */}
                    <div className={newsStyles.mainNewsInner}>
                        <div className={newsStyles.firstArticle}>
                            {articles.length>0 && 
                                <Article key={articles[0].id} article={articles[0]} row={false} main={true}
                                hasComments={true} brief={false}
                                />
                            }   
                        </div>
                        <div className={newsStyles.otherArticles}>
                                {articles.length >=2 && articles.map((item, index)=> {
                                    if(index < 2){
                                        return <Article key={item.id} article={item} row={false} main={false}
                                        hasComments={true} brief={false}
                                        />
                                    }
                                })}
                        </div>
                    </div>
                    <div className={newsStyles.editorPicks}>
                        <h2 className={styles.subtitle}>Editors Picks</h2>
                        {articles.length >= 3 &&
                            <div className={newsStyles.editorPicksArticles}>
                                {articles.map((item,index)=> {
                                    if(index < 3){
                                       return (
                                        <div  key={item.id} className={newsStyles.editorArticle}>
                                       <Article article={item} row={true} main={false}
                                       hours={true} hasComments={false} brief={false}
                                       /> 
                                       </div>
                                       );
                                    }
                                })}
                            </div>
                        }
                    </div>
                </div>
                <div className={newsStyles.stickyBar}>
                    {/* sticky right bar */}
                    <div style={{marginBottom: '2rem'}}>
                        <RecentPosts articles={articles.slice(0,3)}/>
                    </div>
                    <div style={{marginBottom: '2rem'}}>
                        <MostPopular articles={articles.slice(0,5)}/>
                    </div>
                    <div style={{marginBottom: '2rem'}}>
                        <Newsletter/>
                    </div>
                    <div style={{marginBottom: '2rem'}}>
                        <FollowUs/>
                    </div>
                </div>
            </div>
            <div>
                <h2 className={styles.subtitle}>Trending</h2>
                <div className={newsStyles.columnsContainer}>
                    {/* flex */}
                    <div className={newsStyles.column}>
                        <NewsColumn articles={articles.slice(0,5)}/>
                    </div>
                    <div className={newsStyles.column}>
                        <NewsColumn articles={articles.slice(3,7)}/>
                    </div>
                    <div className={newsStyles.column}>
                    <NewsColumn articles={articles.slice(2,6)}/>
                    </div>
                    <div className={newsStyles.column}>
                    <NewsColumn articles={articles.slice(1,4)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

News.getLayout = page => (
    <Layout
    >
        {page}
    </Layout>
);
export default News;