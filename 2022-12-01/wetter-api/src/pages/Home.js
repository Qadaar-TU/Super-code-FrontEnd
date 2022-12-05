import { useState, useEffect } from "react";
import NewsItem from "../components/NewsItem";

const Home = () => {
  const [news, setNews] = useState([]);
  const showFetch = () => {
    fetch(
      "https://newsapi.org/v2/everything?" +
        "q=Apple&" +
        "from=2022-12-01&" +
        "sortBy=popularity&" +
        "apiKey=d920eb0f7c374639845e29f400f6bc7a"
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles));
  };

  useEffect(showFetch, []);
  console.log(news);
  return (
    <div>
      <h1>Top News </h1>
      <section className="grid">
        {news.map((elt, index) => (
          <NewsItem
            key={index}
            title={elt.title}
            image={elt.urlToImage}
            source={elt.source}
            date={elt.puplishedAt}
            url={elt.url}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
