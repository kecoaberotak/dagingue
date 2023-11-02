import { useContext, useState } from "react";
import { ImageSelected } from "../../../contexts/ImageSelected";
import { DescSelected } from "../../../contexts/DescSelected";
import { TitleSelected } from "../../../contexts/TitleSelected";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const GalleryItemsImage = (props) => {
  const {setSelectedImage} = useContext(ImageSelected);
  const {setDescSelected} = useContext(DescSelected);
  const {setTitleSelected} = useContext(TitleSelected);
  const [load, setLoad] = useState(false);

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

  const onLoad = () => {
    setLoad(true);
  }

  const {image, title, desc} = props;
  return (
    <div className="gallery-item-image" onClick={selectImage}>
      <img src={image} alt={title} onLoad={onLoad} className={`${load ? '' : 'hidden'}`} />
      {!load && 
        <div className="w-[66px] h-[66px] sm:w-[132px] sm:h-[132px]">
          <Skeleton height={`100%`} />
        </div>
      }
      <div className={`cover ${load ? '' : 'hidden'}`} data-title={title} data-desc={desc} data-image={image}></div>
    </div>
  );
};

export default GalleryItemsImage;