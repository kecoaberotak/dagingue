import IdAboutProvider from "../../../contexts/idAbout";
import AddAbout from "./AddAbout";

const AboutContent = () => {
  return(
    <IdAboutProvider>
      <AddAbout />
    </IdAboutProvider>
  );
}

export default AboutContent;