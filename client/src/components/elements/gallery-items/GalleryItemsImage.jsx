import { useContext } from "react";
import { ImageSelected } from "../../../contexts/ImageSelected";

const GalleryItemsImage = (props) => {
  const {setSelectedImage} = useContext(ImageSelected);

  const selectImage = (e) => {
    setSelectedImage(e.target.getAttribute('data-image'))

    const imageItems = document.querySelectorAll('.cover');
    imageItems.forEach(image => {
      if(image.classList.contains('selected')){
        image.classList.remove('selected')
      }
    });
    e.target.classList.add('selected');
  };

  const {image} = props;
  return (
    <div className="gallery-item-image" onClick={selectImage}>
      <img src={image} alt="404" />
      <div className='cover' data-image={image}></div>
    </div>
  );
};

export default GalleryItemsImage;