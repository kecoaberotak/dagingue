import GalleryInfoImage from "./GalleryInfoImage";
import GalleryInfoBumbu from "./GalleryInfoBumbu";
import { useContext } from "react";
import { ImageSelected } from "../../../contexts/ImageSelected";
import { DescSelected } from "../../../contexts/DescSelected";
import { TitleSelected } from "../../../contexts/TitleSelected";
import { DataBumbu } from "../../../contexts/DataBumbu";
import SkeletonInfoImage from "../../layouts/Skeleton/SkeletonBumbuInfoImage";

const GalleryInfo = () => {
  const {selectedImage} = useContext(ImageSelected);
  const {descSelected} = useContext(DescSelected);
  const {titleSelected} = useContext(TitleSelected);
  const {dataBumbu} = useContext(DataBumbu);

  return(
    <section className="gallery-info">
      {/* {dataBumbu ? 
        <>
          <GalleryInfoImage image={selectedImage ? selectedImage : dataBumbu[0].file} />
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
          <SkeletonInfoImage />
        </>
      } */}
      <SkeletonInfoImage />
    </section>
  );
};

export default GalleryInfo;