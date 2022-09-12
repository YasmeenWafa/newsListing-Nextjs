import Layout from "../../../layout";
import NewsItem from "./news-item";

NewsItem.getLayout = page => (
    <Layout>
        {page}
    </Layout>
);
export default NewsItem;