import React from 'react'

function Iframeview({scId}) {
    return (
             <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${scId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="youtube"
    />
    {console.log(scId)}
  </div>

    )
}

export default Iframeview
