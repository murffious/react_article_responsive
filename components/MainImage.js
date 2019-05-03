import React, { useState } from 'react';

function MainImage(props) {
    const { images } = props;
    const [ img, setImg ] = useState(images[0].mainUrl);
    const [ description, setDescription ] = useState(images[0].description);
    const [  title, setTitle ] = useState(images[0].title);

    return (
        <div class="img-contianer">
            <div className="crop">
              <img className="slider-image"  src={`https://${img}`} alt={description} />
            </div>   
            <h1>{title}</h1>
            <h4>{description}</h4>
            <div className="thumbnails">
                {images.map(image => (
                    <img
                    // put a good key in here
                    className={img === image.mainUrl ?`img-border`: `img-hover`}
                    key={image.description}
                    src={`https://${image.thumbnailUrl}`}
                    alt={image.description}
                    onClick={() => {
                        setImg(image.mainUrl);
                        setDescription(image.description);
                        setTitle(image.title);
                    }}
                    />
                ))}
                </div>
            <style jsx>{`
                .crop {
                    height: 300px;
                    width: 400px;
                    overflow: hidden;
                }
                .crop img {
                    height: 100%;
                    width: auto;
                }
                .img-container {
                    display: flex;
                    font-family: 'Open Sans', sans-serif;
                }
                .img-border {
                    border: 4px solid black; 
                    
                }
                .img-hover:hover {
                    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
                  }
                .thumbnails {
                    max-width: 75px;
                    display: flex;
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
