import { useEffect, useState } from "react"
import {uuid} from 'uuidv4';
import newsStyles from '../../styles/news.module.css'
import Layout from "../../layout";
import Article from "../../components/article";

function News () {
    
    const [articles, setArticles] = useState([]);

    const getNews = async () => {
    try {
        const res = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4`
        );
        const data = await res.json();
        // console.log(data); 
            data.articles.map(item => {item.id = uuid(); item.category="Tech"})
            setArticles(data.articles)
    } catch (err) {
        console.log(err);
    }
    };

    useEffect(() => {
        if(articles.length === 0)
        getNews();
    }, [articles])
    
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
                                comments={true}
                                />
                            }   
                        </div>
                        <div className={newsStyles.otherArticles}>
                                {articles.length >=2 && articles.map((item, index)=> {
                                    if(index < 2){
                                        return <Article key={item.id} article={item} row={false} main={false}
                                        comments={true}
                                        />
                                    }
                                })}
                        </div>
                    </div>
                    <div className={newsStyles.editorPicks}>
                        <h2>Editors Picks</h2>
                        {articles.length >= 3 &&
                            <div className={newsStyles.editorPicksArticles}>
                                {articles.map((item,index)=> {
                                    if(index < 3){
                                       return (
                                       <Article key={item.id} article={item} row={true} main={false}
                                       hours={true} comments={false}
                                       /> 
                                       );
                                    }
                                })}
                            </div>
                        }
                    </div>
                </div>
                <div className={newsStyles.stickyBar}>
                    {/* sticky right bar */}
                    <h1>sticky bar jcnjfe jncnjnejn jcjcnj nnxsncskksk</h1>
                </div>
            </div>
            {/* {articles && articles.map(item => (
                    <Article key={item.id} article={item} row={true} main={false}/>
                ))} */}
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