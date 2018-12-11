import React from 'react';

// open a window on the Marvel site for the current comic detail
const openWin = (detailPage) => {
  window.open(detailPage);
}

const ComicDetail = (props) => {
  if (props.selectedComic === null) {
    return '';
  }

  // default to an image not found
  let theImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_large.jpg';
  
  if (typeof props.selectedComic.images[0] !== "undefined") {
    theImage = `${props.selectedComic.images[0].path}/portrait_uncanny.jpg`;
  }
  const detailPage = props.selectedComic.urls[0].url;

  
  return (
      <div className="comicDetail" onClick={() => openWin(detailPage)} >
        <img
          alt={props.selectedComic.title}
          src={theImage} />
        <div className="ui segment">
          <h3 className="ui header">
            {props.selectedComic.title} 
          </h3>
          <p>
            {props.selectedComic.description} 
          </p>
        </div>
      </div>
  );
}

export default ComicDetail;