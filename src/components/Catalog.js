import React, { useState } from "react";
import Modal from "./Modal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Catalog = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  const catalogArticles = [
    {
      title: "New Balance 530",
      image: "https://i.imgur.com/GKzr6nQ.jpeg",
      content:
        "New balance 530,Simple.Stylish.Modern.",
    },
    {
      title: "Champion Rally Pro",
      image: "https://i.imgur.com/WPFqig2.jpeg",
      content:
        "Our best and comfortable shoes. ",
    },
  ];

  const openModal = (article) => {
    setCurrentArticle(article);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentArticle(null);
  };

  const openCartModal = () => {
    setCartModalIsOpen(true);
  };

  const closeCartModal = () => {
    setCartModalIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex gap-2">
        <Sidebar />
        <div className="container mx-auto p-4">
          <button
            onClick={openCartModal}
            className="bg-red-500 text-white px-4 py-2 rounded mb-4"
          >
            View Cart
          </button>
          <div className="flex flex-wrap gap-4">
            {catalogArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between w-[300px]"
              >
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full mb-4 rounded object-cover"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {article.content.substring(0, 100)}...
                  </p>
                  <div className="flex justify-between">
                    <button className="bg-green-600 active:bg-green-300 text-white px-4 py-2 rounded">
                      Buy now
                    </button>
                    <button
                      onClick={() => openModal(article)}
                      className="bg-blue-500 active:bg-blue-300 text-white px-4 py-2 rounded"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {modalIsOpen && currentArticle && (
            <Modal onClose={closeModal}>
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-2">
                  {currentArticle.title}
                </h2>
                {currentArticle.image && (
                  <img
                    src={currentArticle.image}
                    alt={currentArticle.title}
                    className="mb-4 max-w-full h-auto rounded max-h-[400px] object-contain"
                  />
                )}
                <p className="text-gray-700 mb-4 w-11/12">
                  {currentArticle.content}
                </p>
                <button
                  onClick={closeModal}
                  className="bg-red-500 text-white w-11/12 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </Modal>
          )}
          {cartModalIsOpen && (
            <Modal onClose={closeCartModal}>
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-2">Your Cart</h2>
                <div className="mb-4 w-full">
                  <div className="w-full flex justify-between items-center mb-2">
                    <span>New balance 530</span>
                    <span>$150</span>
                    <img
                      src="https://i.imgur.com/GKzr6nQ.jpeg"
                      alt="Image 1"
                      className="mb-4 max-h-[200px] h-auto rounded object-contain"
                    />
                  </div>
                  <div className="w-full flex justify-between items-center mb-2">
                    <span>Champion Rally Pro</span>
                    <span>$80</span>
                    <img
                      src="https://i.imgur.com/WPFqig2.jpeg"
                      alt="Image 1"
                      className="mb-4 max-h-[200px] h-auto rounded object-contain"
                    />
                  </div>
                </div>
                <button
                  onClick={closeCartModal}
                  className="bg-red-500 text-white w-11/12 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </Modal>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
