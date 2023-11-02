import { useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const GalleryInfoImage = (props) => {
  const [load, setLoad] = useState(false);

  const onLoad = () => {
    setLoad(true);
  }

  const {image, title} = props;
  return(
    <div className="gallery-info-image">
      <img src={image} alt={title} onLoad={onLoad} className={`${load ? '' : 'hidden'}`}/>
      {!load && <Skeleton height={`98%`} />}
    </div>
  );
};

export default GalleryInfoImage;