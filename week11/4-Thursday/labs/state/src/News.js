import React, { Component } from 'react';

class News extends Component {

  constructor(){

    super();

    this.state = {

      articles : [],
      searchResults: ""
    }
  }

  componentDidMount = () => {
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd";

    let response = await fetch(url);

    let results = await response.json();



    this.setState({
      articles : results.articles
    }, ()=> {
      console.log(this.state.articles);
    })
  }
  

  render() {

    let {articles, searchResults} = {...this.state}

    let articleList = articles.map((article, index) =>{
      return <li key={index}>
        <h4>{article.title}</h4>
        <img src={article.urlToImage}></img>
        <p>{article.description}</p>
      </li>
    })

    console.log("rendered component");


    return (
      <>
        Hello World
        {articleList}
      </>
    )
  }
}

export default News;

