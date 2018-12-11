import React from 'react';
import ComicItem from './ComicItem';


const ComicList= ({ results, onComicSelect }) => {
  const curComicList = results.map(curComic => {
    return (
      <ComicItem key={curComic.id}
        onComicSelect={onComicSelect}
        curComic={curComic}
      />
    )
  });

  return (
    <div className="ui relaxed divided list">
      {curComicList}
    </div>
  )
}

export default ComicList;