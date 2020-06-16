import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ArticleCardGroup from './ArticleCardGroup';

const Blog = (props) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    if(articles.length === 0) {
      axios.get('https://shecodes-blog.herokuapp.com/database-blog')
        .then(res => {setArticles(res.data)})
        .catch(err => {console.log(err);});
    }
  }, [articles]);
  return (
    <ArticleCardGroup articles={articles}/>
  );
}

export default Blog;