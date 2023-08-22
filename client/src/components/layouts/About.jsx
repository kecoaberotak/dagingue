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
      setSrcPreview(data.file1);
      setSrcPreview2(data.file2);
    }
  }, [data]);

  return (
    <Fragment>
      <section className="about" id="about">
        <div className="image-about">
          {srcPreview ? 
          <>
            <img src={srcPreview} alt="foto 1" className="foto-1" />
            <img src={srcPreview2} alt="foto 2" className="foto-2" />
          </>
          :
          <div className="load-gambar"></div>
          }
        </div>
        <article className="article-about">
          <h3>Tentang Dagingue</h3>
          {content ?
          <div dangerouslySetInnerHTML={{__html:content}}></div>
          :
          <div className="load-content"></div>
          }
        </article>
      </section>
    </Fragment>
  );
};

export default About;