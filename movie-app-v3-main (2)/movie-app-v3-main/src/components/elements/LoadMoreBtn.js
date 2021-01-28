// Load More Button - Shows the "load more" button for users to view more movies

import React from 'react';

const LoadMoreBtn = (props) => {
  return (

    <div className="loadmorebtn" onClick={props.onClick}>
      <p>{props.text}</p>
    </div>
  )
}

export default LoadMoreBtn;
