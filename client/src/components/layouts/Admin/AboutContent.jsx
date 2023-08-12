import IdAboutProvider from "../../../contexts/IdAbout";
import EditAbout from "./EditAbout";

const AboutContent = () => {
  return(
    <IdAboutProvider>
      <EditAbout />
    </IdAboutProvider>
  );
}

export default AboutContent;