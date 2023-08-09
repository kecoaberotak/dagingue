import GalleryInfoImage from "./GalleryInfoImage";
import GalleryInfoBumbu from "./GalleryInfoBumbu";
import { useContext } from "react";
import { ImageSelected } from "../../../contexts/ImageSelected";
import { DescSelected } from "../../../contexts/DescSelected";
import { TitleSelected } from "../../../contexts/titleSelected";

const GalleryInfo = () => {
  const {selectedImage} = useContext(ImageSelected);
  const {descSelected} = useContext(DescSelected);
  const {titleSelected} = useContext(TitleSelected);

  return(
    <section className="gallery-info">
      <GalleryInfoImage image={selectedImage ? selectedImage : './images/product-chop-1.jpg'} />
      <GalleryInfoBumbu title={titleSelected ? titleSelected : "Teriyaki Garlic"}>
        {descSelected ? 
          <div dangerouslySetInnerHTML={{__html:descSelected}}></div>
          :
          <p>
            Memiliki rasa manis dan asin.<br/>
            Dengan tambahan aroma khas<br/>
            bawang putih, yang menambah<br/>
            kenikmatan daging.<br/>
          </p>
        }
      </GalleryInfoBumbu>
    </section>
  );
};

export default GalleryInfo;