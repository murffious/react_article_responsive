import React, { useState } from 'react';

function MainImage(props) {
    const { images } = props;
    const [ img, setImg ] = useState(images[0].mainUrl);
    const [ description, setDescription ] = useState(images[0].description);
    const [  title, setTitle ] = useState(images[0].title);

    return (
        <div class="img-contianer">
            <img width="100%" src={`https://${img}`} alt={description} />
            <h1>{title}</h1>
            <h4>{description}</h4>
            <div className="thumbnails">
                {images.map(image => (
                    <img
                    // put a good key in here
                    className={img === image.mainUrl ?`img-border`: null}
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
                .img-container {
                    display: flex;
                    font-family: 'Open Sans', sans-serif;
                }
                .img-border {
                    border: 4px solid black; 
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
