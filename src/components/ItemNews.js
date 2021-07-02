import { string } from "prop-types";

const ItemNews = ({ title, author, source, description, urlImage, url }) => (
  <div className="mx-5 sm:mx-0 max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img
      src={urlImage}
      alt={title}
      className="w-full h-60 bg-cover bg-gray-200"
    />
    <div className="px-6 pt-4 pb-2">
      <h3 className="font-bold text-xl mb-2 title">{title}</h3>
      <p className="text-blue-900 my-2 text">{author}</p>
      <p className="text-gray-700 text-base text">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
        {source}
      </span>
      <a
        href={url}
        target="blank"
        className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2"
      >
        Ver noticia
      </a>
    </div>
  </div>
);

ItemNews.propTypes = {
  title: string,
  author: string,
  source: string,
  description: string,
  urlImage: string,
  url: string
};

ItemNews.defaultProps = {
  title: "",
  author: "",
  source: "",
  description: "",
  urlImage: "",
  url: ""
};

export default ItemNews;
