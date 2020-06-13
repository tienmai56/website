import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ArticleCard from './ArticleCard';

const BodyBlog = (props) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get('/database-blog')
      .then(res => {setArticles(res.data)});
  }, []);
  return (
    articles.map((article, index) => (
      <ArticleCard article={article} key={index} />
    ))
  );
}

export default BodyBlog;