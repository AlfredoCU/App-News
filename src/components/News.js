import { arrayOf, shape } from "prop-types";
import ItemNews from "./ItemNews";

const News = ({ articles }) => (
  <div className="container my-14 flex flex-wrap justify-center gap-y-16 gap-x-6">
    {articles &&
      articles.map(item => (
        <ItemNews
          key={item.title}
          title={item.title}
          author={item.author}
          source={item.source.name}
          description={item.description}
          urlImage={item.urlToImage}
          url={item.url}
        />
      ))}
  </div>
);

News.propTypes = {
  articles: arrayOf(shape({})).isRequired
};

export default News;
