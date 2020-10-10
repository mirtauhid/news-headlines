import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import Footer from './Components/Footer/Footer';
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]);
  const url = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-10&sortBy=publishedAt&apiKey=3a1a4d9585284dc39458e3e0ffee368a`;
  useEffect(() => {
    axios.get(url)
    .then(res => {
      const newsData = res.data.articles;
      setNews(newsData.slice(0,18))
    })
  })
  return (
    <div>
      <Header></Header>
      {
        news.map((news) => <News news={news}></News>)
      }
      <Footer></Footer>
    </div>
  )
}

export default App;
