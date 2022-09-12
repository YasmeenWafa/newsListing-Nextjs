import { withRouter } from 'next/router';

 function NewsItem ({ router: { query } }) {
    const object = JSON.parse(query.article);

    return (
        <div>
            <h1>News Item </h1>
            <p>{object.title}</p>
        </div>
    )
}

export default withRouter(NewsItem);