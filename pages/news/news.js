import Link from "next/link";
import { useEffect, useState } from "react"
import {uuid} from 'uuidv4';

function News () {

    const [articles, setArticles] = useState();

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
        getNews()
    }, [])
    
    return (
        <div>
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

export default News;