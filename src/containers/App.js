import { useState, useEffect } from "react";
import { getNews } from "../helpers/index";
import { Header, Form, News } from "../components/index";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState({
    category: "general",
    country: "MX"
  });

  const { category, country } = filter;

  const handleFilter = data => {
    setFilter(data);
  };

  useEffect(() => {
    const api = async () => {
      let articles = await getNews(country, category);
      setArticles(articles);
    };
    api();
  }, [country, category]);

  return (
    <div>
      <Header title={`Noticias de ${country}`} />
      <Form handleFilter={handleFilter} />
      <News articles={articles} />
    </div>
  );
};

export default App;
