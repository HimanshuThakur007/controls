import React from "react";
import ImageCard from "../UI/ImageCard";
import photo from "../Images/photo.jpg";

const ImageGrid = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <ImageCard
              img={photo}
              text="Some quick example text to build on the 
              card title and make up the bulk of the card's 
              content."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
