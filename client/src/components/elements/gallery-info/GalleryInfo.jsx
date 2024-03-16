import GalleryInfoImage from "./GalleryInfoImage";
import GalleryInfoBumbu from "./GalleryInfoBumbu";
import { useContext } from "react";
import { ImageSelected } from "../../../contexts/ImageSelected";
import { DescSelected } from "../../../contexts/DescSelected";
import { TitleSelected } from "../../../contexts/TitleSelected";
import { DataBumbu } from "../../../contexts/DataBumbu";
import SkeletonInfoImage from "../../layouts/Skeleton/SkeletonBumbuInfoImage";
import SkeletonBumbuInfoContent from "../../layouts/Skeleton/SkeletonBumbuInfoContent";

const GalleryInfo = () => {
  const { selectedImage } = useContext(ImageSelected);
  const { descSelected } = useContext(DescSelected);
  const { titleSelected } = useContext(TitleSelected);
  const { dataBumbu } = useContext(DataBumbu);

  return (
    <>
      {dataBumbu ? (
        <section className="gallery-info">
          <GalleryInfoImage
            image={selectedImage ? selectedImage : dataBumbu[0].file}
            title={titleSelected ? titleSelected : dataBumbu[0].title}
          />
          <GalleryInfoBumbu
            title={titleSelected ? titleSelected : dataBumbu[0].title}
          >
            {descSelected ? (
              <div dangerouslySetInnerHTML={{ __html: descSelected }}></div>
            ) : (
              <div
                dangerouslySetInnerHTML={{ __html: dataBumbu[0].desc }}
              ></div>
            )}
          </GalleryInfoBumbu>
        </section>
      ) : (
        <section
          className="grid grid-flow-col box-border"
          data-testid="skeleton-gallery-info"
        >
          <SkeletonInfoImage />
          <SkeletonBumbuInfoContent />
        </section>
      )}
    </>
  );
};

export default GalleryInfo;
