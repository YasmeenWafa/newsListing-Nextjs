import Link from "next/link";
import { useEffect, useState } from "react"
import {uuid} from 'uuidv4';
import styles from '../../styles/Home.module.css'
import Layout from "../../layout";

function News () {
    
    const [articles, setArticles] = useState([]);

    const getNews = async () => {
    try {
        const res = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4`
        );
        const data = await res.json();
        // console.log(data); 
            data.articles.map(item => item.id = uuid())
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
        <div className={styles.news}>
            <h1>News</h1>
            {articles && articles.map(item => (
                <div key={item.id}>
                    <Link  href={{ pathname: `/news/${item.id}`, query: { article: JSON.stringify(item) } }}>{item.title}
                    </Link>
                </div>
                ))}
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