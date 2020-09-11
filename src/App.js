import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Card } from '@material-ui/core';
import News from './Components/News/News';
import Chart from './Components/Chart/Chart';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  // useEffect ( () => {
  //   fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5cacfa46c6b44c2c9fbe994daf2703d2')
  //   .then(res => res.json())
  //   .then(data => setArticles(data.articles))
  // })

  useEffect ( () => {
    const url = ('https://newsapi.org/v2/top-headlines?country=us&apiKey=5cacfa46c6b44c2c9fbe994daf2703d2')
    axios(url)
    .then(data => setArticles(data.data.articles))
  }, [])

  return (
    <div>
     <h2>Headlines: {articles.length}</h2>
     {
       articles.map(article => <News article = { article}></News>)
     }
    </div>
  );
}

export default App;
