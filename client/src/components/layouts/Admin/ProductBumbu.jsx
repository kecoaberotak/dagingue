import AddBumbu from "./AddBumbu";
import ShowBumbu from "./ShowBumbu";
import EditBumbu from "./EditBumbu";
import {DisplayStatus} from "../../../contexts/DisplayStatus"
import { useContext } from "react";
import IdBumbuProvider from "../../../contexts/IdBumbu";

const ProductBumbu = () => {
  const {displayStatus} = useContext(DisplayStatus);

  const Display = () => {
    if(displayStatus === 'show'){
      return (
        <ShowBumbu />
      )
    }else if(displayStatus === 'add'){
      return (
        <AddBumbu />
      )
    }else if(displayStatus === 'edit'){
      return (
        <EditBumbu />
      )
    }
  }

  return(
    <>
    <IdBumbuProvider>
      {<Display />}
    </IdBumbuProvider>
    </>
  );
};

export default ProductBumbu;