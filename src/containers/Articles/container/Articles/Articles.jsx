import React, { useState } from "react";
import "./index.scss";
import { Article } from "../../components/Article";

export default () => {
  const [articles] = useState([
    {
      title: "Article title 001",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their",
      image: "https://picsum.photos/200/300?grayscale",
    },
    {
      title: "Article title 002",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their",
      image: "https://picsum.photos/200/300?grayscale",
    },
    {
      title: "Article title 003",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their",
      image: "https://picsum.photos/id/237/200/300",
    },
  ]);
  return (
    <div className="articles">
      {articles.map((article, index) => (
        <Article article={article} key={`${article.title}-${index}`} />
      ))}
    </div>
  );
};
