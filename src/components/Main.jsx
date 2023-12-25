import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Main.css";

function Main() {
  const API_KEY = "c402e2e0e27842e7b20cdbcc4fb819ec";
  const url = "https://newsapi.org/v2/everything?q=";

  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  async function fetchNews(query) {
    try {
      setLoading(true);
      const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setArticles(data.articles);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching news:", error);
    }
  }

  const handleCardClick = (url) => {
    window.location.href = url;
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="news-container">
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange("all")}
          className={category === "all" ? "active" : ""}>All News</button>
        <button onClick={() => handleCategoryChange("sports")}
          className={category === "sports" ? "active" : ""}>Sports</button>
        <button onClick={() => handleCategoryChange("finance")}
          className={category === "finance" ? "active" : ""}>Finance</button>
        <button onClick={() => handleCategoryChange("technology")}
          className={category === "technology" ? "active" : ""}>Technology</button>
        <button onClick={() => handleCategoryChange("science")}
          className={category === "science" ? "active" : ""}>Science</button>
        <button onClick={() => handleCategoryChange("entertainment")}
          className={category === "entertainment" ? "active" : ""}>Entertainment</button>
        <button onClick={() => handleCategoryChange("education")}
          className={category === "education" ? "active" : ""}>Education</button>
        <button onClick={() => handleCategoryChange("weather")}
          className={category === "weather" ? "active" : ""}>Weather</button>
      </div>

      <div className="news-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {loading && <p className="loading">Loading...</p>}

      {!loading && (
        <div className="main-container">
          <div className="card-grid">
            {filteredArticles.map((article) => (
              <Card
                key={article.url}
                title={article.title}
                date={new Date(article.publishedAt).toLocaleString("en-US", {
                  timeZone: "Asia/Jakarta",
                })}
                description={article.description}
                imageUrl={article.urlToImage}
                onClick={() => handleCardClick(article.url)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Main;
