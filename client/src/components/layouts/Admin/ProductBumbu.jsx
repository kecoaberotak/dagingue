import AddBumbu from "./AddBumbu";
import ShowBumbu from "./ShowBumbu";
import {DisplayStatus} from "../../../contexts/DisplayStatus"
import { useContext } from "react";

const ProductBumbu = () => {
  const {displayStatus} = useContext(DisplayStatus);
  console.log(displayStatus);
  return(
    <>
      {displayStatus ? <AddBumbu /> : <ShowBumbu />}
    </>
  );
};

export default ProductBumbu;