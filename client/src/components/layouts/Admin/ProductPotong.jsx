import { useContext } from "react";
import { DisplayStatus } from "../../../contexts/DisplayStatus";
import IdPotongProvider from "../../../contexts/IdPotong";

import ShowPotong from "./ShowPotong";
import AddPotong from "./AddPotong";
import EditPotong from "./EditPotong";

const ProductPotong = () => {
  const {displayStatus} = useContext(DisplayStatus);

  const Display = () => {
    if(displayStatus === 'show'){
      return (
        <ShowPotong />
      )
    }else if(displayStatus === 'add'){
      return (
        <AddPotong />
      )
    }else if(displayStatus === 'edit'){
      return (
        <EditPotong />
      )
    }
  };

  return(
    <>
    <IdPotongProvider>
      <Display />
    </IdPotongProvider>
    </>
  );
};

export default ProductPotong;