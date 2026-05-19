import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axiosInstance from "../utils/axiosInstance";
import {
  primaryBtn,
  secondaryBtn,
  articleGrid,
  articleCardClass,
  articleTitle,
  articleExcerpt,
  timestampClass,
  tagClass,
  loadingClass,
  errorClass,
  ghostBtn,
} from "../styles/common.js";

function Home() {
  const [view, setView] = useState("welcome"); // "welcome" | "articles" | "learn"
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (view === "articles") {
      const fetchArticles = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await axiosInstance.get("/auth/articles");
          if (res.status === 200) {
            setArticles(res.data.payload || []);
          }
        } catch (err) {
          setError(err.response?.data?.message || err.response?.data?.error || "Failed to load articles.");
        } finally {
          setLoading(false);
        }
      };
      fetchArticles();
    }
  }, [view]);

  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* HERO/WELCOME VIEW */}
        {view === "welcome" && (
          <div className="text-center max-w-2xl mx-auto py-12 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-6">
              Welcome to MyBlog
            </h1>

            <p className="text-lg text-[#6e6e73] leading-relaxed mb-8">
              A modern blogging platform where users can read articles, share thoughts,
              and engage through comments. Authors can publish and manage articles,
              while admins manage users and platform access.
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setView("articles")}
                className={primaryBtn}
              >
                Explore Articles
              </button>

              <button
                onClick={() => setView("learn")}
                className={secondaryBtn}
              >
                Learn More
              </button>
            </div>

            <p className="mt-12 text-sm text-[#a1a1a6]">
              Built with React, Node.js, Express & MongoDB
            </p>
          </div>
        )}

        {/* ARTICLES VIEW */}
        {view === "articles" && (
          <div>
            <div className="flex items-center justify-between border-b border-[#e8e8ed] pb-6 mb-8">
              <h2 className="text-3xl font-bold text-[#1d1d1f] tracking-tight">
                Explore Articles
              </h2>
              <button
                onClick={() => setView("welcome")}
                className={secondaryBtn}
              >
                ← Back
              </button>
            </div>

            {loading && <p className={loadingClass}>Loading articles...</p>}
            {error && <p className={errorClass + " text-center"}>{error}</p>}

            {!loading && !error && articles.length === 0 && (
              <p className="text-[#a1a1a6] text-center py-12">
                No articles published yet. Check back soon!
              </p>
            )}

            {!loading && !error && articles.length > 0 && (
              <div className={articleGrid}>
                {articles.map((articleObj) => (
                  <div key={articleObj._id} className={articleCardClass}>
                    <span className={tagClass}>{articleObj.category}</span>
                    <h3 className={articleTitle}>{articleObj.title}</h3>
                    <p className={articleExcerpt}>
                      {articleObj.content.length > 100
                        ? `${articleObj.content.slice(0, 100)}...`
                        : articleObj.content}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <span className={timestampClass}>
                        {formatDateIST(articleObj.createdAt)}
                      </span>
                      <button
                        onClick={() => navigateToArticleByID(articleObj)}
                        className={ghostBtn}
                      >
                        Read Article →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* LEARN VIEW */}
        {view === "learn" && (
          <div>
            <div className="flex items-center justify-between border-b border-[#e8e8ed] pb-6 mb-8">
              <h2 className="text-3xl font-bold text-[#1d1d1f] tracking-tight">
                How MyBlog Works
              </h2>
              <button
                onClick={() => setView("welcome")}
                className={secondaryBtn}
              >
                ← Back
              </button>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-lg text-[#6e6e73] leading-relaxed">
                MyBlog is a secure, role-based publishing platform designed to bring readers and writers together. Here's a breakdown of the roles and features available in our system:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* READERS */}
                <div className="bg-[#f5f5f7] rounded-2xl p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center font-bold text-lg">
                    📖
                  </div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f]">
                    Readers (Users)
                  </h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">
                    Browse and read published articles publicly. Registered users can also log in to comment and engage in conversations.
                  </p>
                </div>

                {/* AUTHORS */}
                <div className="bg-[#f5f5f7] rounded-2xl p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center font-bold text-lg">
                    ✍
                  </div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f]">
                    Authors
                  </h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">
                    Write new blog articles, edit their existing articles, and manage or soft-delete their own content.
                  </p>
                </div>

                {/* ADMINS */}
                <div className="bg-[#f5f5f7] rounded-2xl p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center font-bold text-lg">
                    ⚙
                  </div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f]">
                    Administrators
                  </h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">
                    Moderate the platform. Admins can view all registered users and block/unblock accounts to ensure a safe environment.
                  </p>
                </div>

              </div>

              <div className="bg-[#f5f5f7] rounded-2xl p-6 mt-6 border-l-4 border-[#0066cc]">
                <h4 className="text-base font-semibold text-[#1d1d1f] mb-1">
                  Public Browsing & Interaction
                </h4>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  Anyone can explore the homepage, learn how the system works, and read all articles without logging in. Commenting is restricted to logged-in users only to maintain high-quality discussions.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;