import { useEffect, useState } from "react";
import { SectionHeader, ArticleBox } from "./../../components";

import "./last-articles.css";

const LastArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles`)
      .then((res) => res.json())
      .then((allArticles) => {
        setArticles(allArticles);
      });
  }, []);

  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
          btnHref='articles/1'
        />

        <div className="articles__content">
          <div className="row">
            {articles.slice(0, 3).map((article) => (
              <ArticleBox {...article} key={article._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LastArticles