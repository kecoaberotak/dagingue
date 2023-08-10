import GalleryInfoImage from "./GalleryInfoImage";
import GalleryInfoBumbu from "./GalleryInfoBumbu";
import { useContext } from "react";
import { ImageSelected } from "../../../contexts/ImageSelected";
import { DescSelected } from "../../../contexts/DescSelected";
import { TitleSelected } from "../../../contexts/titleSelected";
import { DataBumbu } from "../../../contexts/DataBumbu";

const GalleryInfo = () => {
  const {selectedImage} = useContext(ImageSelected);
  const {descSelected} = useContext(DescSelected);
  const {titleSelected} = useContext(TitleSelected);
  const {dataBumbu} = useContext(DataBumbu);

  return(
    <section className="gallery-info">
      <GalleryInfoImage image={selectedImage ? selectedImage : `http://localhost:4000/${dataBumbu[0].file}`} />
      <GalleryInfoBumbu title={titleSelected ? titleSelected : dataBumbu[0].title}>
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