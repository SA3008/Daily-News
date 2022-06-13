import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  articles = [
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Mike DeBonis, Leigh Ann Caldwell",
      "title": "Senators strike bipartisan gun deal, heralding potential breakthrough - The Washington Post",
      "description": "The handshake deal, which will include modest new gun restrictions alongside significant new mental health and school security investments, came after three weeks of intensive talks. Now the negotiators must build support among a broader group of Republicans.",
      "url": "https://www.washingtonpost.com/politics/2022/06/12/senate-gun-deal-framework/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZVBZFVXGTQI6ZJBCCG53SHNTBM.jpg&w=1440",
      "publishedAt": "2022-06-13T02:40:19Z",
      "content": "Placeholder while article actions load\r\nA bipartisan group of senators announced Sundaythat it had reached a tentative agreement on legislation that would pair modest new gun restrictions with signif… [+10999 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Sandra Gonzalez, Chloe Melas",
      "title": "Tony Awards 2022: See the list of winners - CNN",
      "description": "The Tony Awards celebrate the best in theater and this year's celebration is returning to Radio City Music Hall for the first time since the pandemic.",
      "url": "https://www.cnn.com/2022/06/12/entertainment/tony-awards-2022-winners/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220609163512-02-a-strange-loop-broadway.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2022-06-13T02:31:00Z",
      "content": "The Tony Awards celebrate the best in theater and this years celebration is returning to Radio City Music Hall for the first time since the pandemic. \r\nWest Side Story star and Oscar winner Ariana De… [+5347 chars]"
    },
    {
      "source": { "id": null, "name": "Bitcoin.com" },
      "author": null,
      "title": "Economist Peter Schiff Explains Why He Expects Bitcoin to Crash as Recession Deepens — Warns 'Don't Buy This Dip' – Bitcoin News - Bitcoin News",
      "description": "Economist and gold bug Peter Schiff has made some dire predictions about cryptocurrency, particularly bitcoin and ether.",
      "url": "https://news.bitcoin.com/economist-peter-schiff-explains-why-he-expects-bitcoin-to-crash-as-recession-deepens-warns-dont-buy-this-dip/",
      "urlToImage": "https://static.news.bitcoin.com/wp-content/uploads/2022/06/schiff.jpg",
      "publishedAt": "2022-06-13T01:30:17Z",
      "content": "Economist and gold bug Peter Schiff has made some dire predictions about cryptocurrency, particularly bitcoin and ether. He explained that “The need to sell bitcoin to pay the bills will only get wor… [+3736 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "CNN's Beijing Bureau and Sophie Jeong in Hong Kong",
      "title": "Video of women being brutally attacked sparks public outrage in China - CNN",
      "description": "Nine people have been arrested in China following an assault on four women in the northern city of Tangshan on Friday, local police said in a statement on Saturday.",
      "url": "https://www.cnn.com/2022/06/12/asia/tangshan-video-attack-china-intl/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220612132803-tangshan-attack-video-china-intl-super-tease.jpg",
      "publishedAt": "2022-06-13T01:02:00Z",
      "content": null
    }
  ]

  constructor(){
    super();
    console.log('inside the constructor')
    this.state = {
      articles : this.articles,
      loading : false
    }
  }
  render() {
    return (
      <div>
            
            <div className="container my-3">
              <h2>Daily News - Top Headlines...</h2>
              <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4 my-3"  key={(element.url)}>
                       <NewsItem title = {element.title.slice(0,45)} description = {element.description.slice(0,88)} newsUrl={element.url} imageUrl = {element.urlToImage}/>
                       </div>
              
              })}
              </div>
              
            </div>

      </div>
    )
  }
}
