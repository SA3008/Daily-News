import React from 'react'

const NewsItem = (props) => {

  
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      
      <div>
        <div className="card " style={{boxShadow: '5px 10px 15px grey'}} >
          <img height="220px" width="414px"src={imageUrl==null? "https://cdn.cnn.com/cnnnext/dam/assets/22060916012…ne-2022-strawberry-full-moon-file-super-tease.jpg" : imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5> <span className=" position-absolute top-0 end-0  badge rounded-pill bg-dark" style={{left:'90%!important', zIndex:'1'}}>{source}</span>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By: {!author?'Unknown':author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-danger" style={{backgroundColor:"#A00"}}>Read More</a>
          </div>
        </div>
      </div>
        
    
    )
    
  
}
export default NewsItem
