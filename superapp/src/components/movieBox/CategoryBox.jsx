import React from 'react';
import styles from "./CategoryBox.module.css";
import ActionImage from "../../assets/images/Action-image.png";
import DramaImage from "../../assets/images/Drama-image.png";
import FantasyImage from "../../assets/images/Fantasy-image.png";
import FictionImage from "../../assets/images/Fiction-image.png";
import HorrorImage from "../../assets/images/Horror-image.png";
import MusicImage from "../../assets/images/Music-image.png";
import RomanceImage from "../../assets/images/Romance-image.png";
import ThrillerImage from "../../assets/images/Thriller-image.png";
import WesternImage from "../../assets/images/Western-image.png";


const categoryImages = {
  Action: ActionImage,
  Drama: DramaImage,
  Fantasy:FantasyImage,
  Fiction:FictionImage,
  Horror:HorrorImage,
  Music:MusicImage,
  Romance: RomanceImage,
  Thriller:ThrillerImage,
  Western:WesternImage
};

const CategoryBox = ({ category, isSelected, onClick }) => {
  const ImageComponent = categoryImages[category];

  return (
    <div className={`${styles.box} ${styles[category.toLowerCase()]} ${isSelected && styles.selected}`} onClick={onClick}>
      <div className={styles.headingBox}>
        <h3 className={styles.heading}>{category}</h3>
      </div>
      <img src={ImageComponent} alt="image" className={styles.image} />
    </div>
  );
};

export default CategoryBox;