import GalleryInfoImage from "./GalleryInfoImage";
import GalleryInfoBumbu from "./GalleryInfoBumbu";
import { useContext } from "react";
import { ImageSelected } from "../../../contexts/ImageSelected";

const GalleryInfo = () => {
  const {selectedImage} = useContext(ImageSelected);

  return(
    <section className="gallery-info">
      <GalleryInfoImage image={selectedImage ? selectedImage : './images/product-chop-1.jpg'} />
      <GalleryInfoBumbu title="Teriyaki Garlic">
        <p>
          Bumbu teriyaki garlic memiliki rasa manis<br/>
          dan asin. Dengan tambahan aroma khas<br/>
          bawang putih, akan meningkatkan<br/>
          kenikmatan dari daging yang anda beli.<br/>
        </p>
      </GalleryInfoBumbu>
    </section>
  );
};

export default GalleryInfo;