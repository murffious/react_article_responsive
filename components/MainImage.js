import React from 'react';
MainImage.updateMainImage = thumbnail => () => {
    
}
function MainImage(props) {
    const { images } = props;
    return (
        <div class="img-contianer">
            <img width="100%" src={`https://${images[0].mainUrl}`} alt="main image" />
            <h1>{images[0].title}</h1>
            <h4>{images[0].description}</h4>
            <div className="thumbnails">
                {images.map(thumb => (
                    <img
                    // put a good key in here
                    key={thumb}
                    src={`https://${thumb.thumbnailUrl}`}
                    alt={thumb}
                    onClick={MainImage.updateMainImage(thumb)}
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
