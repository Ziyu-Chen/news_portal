import React from "react";
import ArticlePreview from "./ArticlePreview";
import articles from "../fakeData.json";

function Home() {
  return (
    <div id="home">
      {articles.map(article => (
        <ArticlePreview article={article} />
      ))}
    </div>
  );
}

export default Home;
