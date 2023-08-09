import { Fragment, useEffect, useState } from "react";
import '../../assets/landing-page-css/about.css';
import { getContent } from "../../services/about-service";

const About = () => {
  const [data, setData] = useState();
  const [srcPreview, setSrcPreview] = useState();
  const [srcPreview2, setSrcPreview2] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    getContent(res => setData(res.data[0]));
  }, []);

  useEffect(() => {
    if(data){
      setContent(data.content)
      setSrcPreview(`http://localhost:4000/${data.file1}`);
      setSrcPreview2(`http://localhost:4000/${data.file2}`);
    }
  }, [data]);

  return (
    <Fragment>
      <section className="about" id="about">
        <div className="image-about">
          <img src={srcPreview} alt="foto 1" className="foto-1" />
          <img src={srcPreview2} alt="foto 2" className="foto-2" />
        </div>
        <article className="article-about">
          <h3>Tentang Dagingue</h3>
          <div dangerouslySetInnerHTML={{__html:content}}></div>
        </article>
      </section>
    </Fragment>
  );
};

export default About;