import React, { useState } from 'react';

function MainImage(props) {
    const { images } = props;
    const [img, setImg] = useState(images[0].mainUrl);

    return (
        <div class="img-contianer">
            <img width="100%" src={`https://${img}`} alt="main image" />
            <h1>{images[0].title}</h1>
            <h4>{images[0].description}</h4>
            <div className="thumbnails">
                {images.map(image => (
                    <img
                    // put a good key in here
                    className={img === image.mainUrl ?`img-border`:null}
                    key={image.description}
                    src={`https://${image.thumbnailUrl}`}
                    alt={image.description}
                    onClick={() => setImg(image.mainUrl)}
                    />
                ))}
                </div>
            <style jsx>{`
                p {
                    font-family: 'Open Sans', sans-serif;
                }
                div {
                
                }
                .img-container {
                    display: flex;
                }
                .img-border {
                    border: 4px solid black; 
                }
                @media (max-width: 600px) {
                    div {
                    
                    }
                }
                `}
            </style>
        </div>
    );
  }
  
  export default MainImage; 
