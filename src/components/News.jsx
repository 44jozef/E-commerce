import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const News = () => {
  const newsArticles = [
    {
      title: "Mrbeast hit 300m subs!!!",
      date: "June 20, 2024",
      content:
        "Mrbeast hit 300m subs on Youtube and became the first in top!.",
      imageUrl: "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      title: "Audi RS3 breaks record!",
      date: "July 30, 2024",
      content:
        "2025 Audi RS3 Shattered the BMW M2’s Nurburgring Lap Record by 5 Seconds.",
      imageUrl:
        "https://www.thedrive.com/wp-content/uploads/2024/06/A242743_medium-e1718979731609.jpg?w=2048&h=1152",
    },
    {
      title: "Hidayat Heydarov won Olympics!",
      date: "July 29, 2024",
      content:
        "Hidayat Heydarov of Azerbaijan takes Olympic men’s -73 kg title in epic battle for gold.",
      imageUrl: "https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2019/05/Final73Kg-1557590010-1557590010.jpg",
    },
    
  ];

  return (
    <>
      <Navbar />
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Latest News
        </h1>
      <div className="news-container grid grid-cols-3 mx-auto p-6">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            className="mb-6 p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-64 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-3xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{article.date}</p>
            <p className="text-gray-700 leading-relaxed">{article.content}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default News;
