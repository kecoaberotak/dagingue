import { createContext, useState } from "react";

const ImageSelectedContex = createContext();

const ImageSelectedContexProvider = ({children}) => {
  const [selectedImage, setSelectedImage] = useState('');

  return(
    <ImageSelectedContex.Provider value={{selectedImage, setSelectedImage}}>
      {children}
    </ImageSelectedContex.Provider>
  );
};

export const ImageSelected = ImageSelectedContex;
export default ImageSelectedContexProvider;