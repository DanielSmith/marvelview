import React from 'react';

const ComicItem = ({curComic, onComicSelect}) => {
  const myImage = `${curComic.thumbnail.path}/landscape_large.jpg`;

  return (
    <div className="item comicItem" onClick={() => onComicSelect(curComic)}>
      <img
        alt="curComic.title"
        className="ui image"
        src={myImage} />
      <p>{curComic.title}</p>
    </div>
  )
}

export default ComicItem;