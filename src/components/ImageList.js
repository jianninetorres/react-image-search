import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  console.log(images);
  const list = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{list}</div>;
};

export default ImageList;
