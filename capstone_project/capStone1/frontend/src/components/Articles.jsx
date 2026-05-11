import { useEffect, useState } from "react";
import axios from "axios";

import {
  pageBackground,
  articleGrid,
  articleCardClass,
  articleTitle,
  articleExcerpt,
  articleMeta,
  headingClass,
  bodyText,
  errorClass,
} from "../styles/common";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ SET GLOBAL BASE URL + CREDENTIALS
  axios.defaults.baseURL = "https://atp-24eg112c59.onrender.com";
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // ✅ FIXED endpoint
        const res = await axios.get("/user-api/articles");

        setArticles(res.data.payload); // 🔥 IMPORTANT
      } catch (err) {
        console.log("Error fetching articles:", err);
        setError("Failed to load articles");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className={`${pageBackground} flex items-center justify-center py-16`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className={bodyText}>Loading articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${pageBackground} flex items-center justify-center py-16 px-4`}>
        <div className="text-center">
          <p className={errorClass}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${pageBackground} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={headingClass}>All Articles</h1>

        {articles.length === 0 ? (
          <div className="text-center py-16">
            <p className={bodyText}>No articles published yet.</p>
          </div>
        ) : (
          <div className={articleGrid}>
            {articles.map((article) => (
              <div key={article._id} className={articleCardClass}>
                <h2 className={articleTitle}>{article.title}</h2>

                <p className={articleExcerpt}>
                  {article.content?.substring(0, 150)}...
                </p>

                <div className={articleMeta}>
                  <span>
                    By {article.author?.firstName} {article.author?.lastName}
                  </span>
                  <span>•</span>
                  <span>
                    {new Date(article.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Articles;
