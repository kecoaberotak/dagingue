import { useContext } from "react";
import { ImageSelected } from "../../../contexts/ImageSelected";
import { DescSelected } from "../../../contexts/DescSelected";
import { TitleSelected } from "../../../contexts/titleSelected";

const GalleryItemsImage = (props) => {
  const {setSelectedImage} = useContext(ImageSelected);
  const {setDescSelected} = useContext(DescSelected);
  const {setTitleSelected} = useContext(TitleSelected);

  const selectImage = (e) => {
    setSelectedImage(e.target.getAttribute('data-image'))
    setDescSelected(e.target.getAttribute('data-desc'))
    setTitleSelected(e.target.getAttribute('data-title'))

    const imageItems = document.querySelectorAll('.cover');
    imageItems.forEach(image => {
      if(image.classList.contains('selected')){
        image.classList.remove('selected')
      }
    });
    e.target.classList.add('selected');
  };

  const {image, key, title, desc} = props;
  return (
    <div className="gallery-item-image" onClick={selectImage}>
      <img src={image} alt="404" />
      <div className='cover' key={key} data-title={title} data-desc={desc} data-image={image}></div>
    </div>
  );
};

export default GalleryItemsImage;