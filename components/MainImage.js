import React, { useState } from "react";
const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className="slide" style={styles} />;
};
function MainImage(props) {
  const { images } = props;
  const [img, setImg] = useState(images[0].mainUrl);
  const [description, setDescription] = useState(images[0].description);
  const [title, setTitle] = useState(images[0].title);

  return (
    <div className="img-contianer">
      <div className="crop">
        <img
          className="slider-image"
          src={`https://${img}`}
          alt={description}
        />
      </div>
      <div className="img-detail-wrapper">
        <div className="image-detail">
          <h1>{title}</h1>
          <h4>{description}</h4>
        </div>
        <div className="thumbnails">
          {images.map(image => (
            <img
              // put a good key in here
              height="50px"
              className={img === image.mainUrl ? `img-border` : `img-hover`}
              key={image.description + new Date().getTime()}
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
      </div>
      <style jsx>
        {`
          .crop {
            width: 100%;
            height: 100%;
          }
          .crop img {
            width: 100%;
            height: 100%;
            max-height: 500px;
          }

          .img-container {
          }
          .img-border {
            border: 4px solid black;
          }
          .img-hover:hover {
            box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
          }
          .image-detail {
            display: flex;
            flex-direction: column;
            width: 40%;
          }
          .image-detail h1 {
            order: 1;
            font-size: 0.9em;
          }
          .image-detail h4 {
            order: 2;
            font-size: 0.7em;
          }
          .img-detail-wrapper {
            display: flex;
            vertical-align: middle;
          }
          .thumbnails {
            max-width: 45%;
            display: flex;
            padding-left: 22px;
          }
          .thumbnails img {
            margin: 4px;
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
