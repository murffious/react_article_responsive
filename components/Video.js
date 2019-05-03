import React from 'react';
// Video.expandVideo = video => () => {
    
// }

const Video = ({ selectedVideo }) => {
//   if (!selectedVideo) {
//     return <div>Loading...</div>;
//   }

  const videoSrc = `https://www.youtube.com/embed/0J-_f4oRuWI`;

//   const { description, title } = selectedVideo.snippet;

  return (
    <div>
      <div className="ui embed">
        <iframe  src={videoSrc} frameBorder="0" />
      </div>
      <div className="ui segment">
        {/* <h4 className="ui header">{title}</h4> */}
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
};

export default Video;