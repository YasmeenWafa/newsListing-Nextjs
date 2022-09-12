import Link from "next/link";
import { useEffect, useState } from "react"
import {uuid} from 'uuidv4';
import styles from '../../styles/Home.module.css'

function News ({articles}) {
    
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

export default News;