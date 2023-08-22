import GalleryItemsImage from "./GalleryItemsImage";
import { DataBumbu } from "../../../contexts/DataBumbu";
import { useContext } from "react";

const GalleryItems = () => {
  const {dataBumbu} = useContext(DataBumbu);

  if(dataBumbu){
    return(
      <section className="gallery-items">
        {dataBumbu.map(data => <GalleryItemsImage key={data._id} title={data.title} desc={data.desc} image={data.file} />)}
      </section>
    );
  }
};

export default GalleryItems;