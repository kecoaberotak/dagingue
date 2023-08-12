import GalleryInfoImage from "./GalleryInfoImage";
import GalleryInfoBumbu from "./GalleryInfoBumbu";
import { useContext } from "react";
import { ImageSelected } from "../../../contexts/ImageSelected";
import { DescSelected } from "../../../contexts/DescSelected";
import { TitleSelected } from "../../../contexts/TitleSelected";
import { DataBumbu } from "../../../contexts/DataBumbu";

const GalleryInfo = () => {
  const {selectedImage} = useContext(ImageSelected);
  const {descSelected} = useContext(DescSelected);
  const {titleSelected} = useContext(TitleSelected);
  const {dataBumbu} = useContext(DataBumbu);

  return(
    <section className="gallery-info">
      {dataBumbu ? 
        <>
          <GalleryInfoImage image={selectedImage ? selectedImage : `http://localhost:4000/${dataBumbu[0].file}`} />
          <GalleryInfoBumbu title={titleSelected ? titleSelected : dataBumbu[0].title}>
            {descSelected ? 
              <div dangerouslySetInnerHTML={{__html:descSelected}}></div>
              :
              <div dangerouslySetInnerHTML={{__html:dataBumbu[0].desc}}></div>
            }
          </GalleryInfoBumbu>
        </>
        :
        <>
          <div className="load-info-img"></div>
          <div className="load-info-bumbu"></div>
        </>
      }
    </section>
  );
};

export default GalleryInfo;