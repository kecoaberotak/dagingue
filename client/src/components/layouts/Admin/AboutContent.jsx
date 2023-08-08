import IdAboutProvider from "../../../contexts/idAbout";
import EditAbout from "./EditAbout";

const AboutContent = () => {
  return(
    <IdAboutProvider>
      <EditAbout />
    </IdAboutProvider>
  );
}

export default AboutContent;