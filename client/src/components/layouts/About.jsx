import { Fragment, useEffect, useState } from "react";
import { getContent } from "../../services/about-service";
import AboutArticleSkeleton from "./Skeleton/AboutArticleSkeleton";
import AboutSkeletonImages from "./Skeleton/AboutSkeletonImages";
import { Helmet } from "react-helmet-async";

const About = () => {
  const [data, setData] = useState();
  const [srcPreview, setSrcPreview] = useState();
  const [srcPreview2, setSrcPreview2] = useState();
  const [content, setContent] = useState();
  const [load, setLoad] = useState(false);

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

  const onLoad = () => {
    setLoad(true);
  }

  return (
    <Fragment>
      <section className="about" id="about">
        <div className="image-about">
          <img src={srcPreview} alt="foto 1" className={`foto-1 ${load ? '' : 'hidden'}`} onLoad={onLoad}/>
          <img src={srcPreview2} alt="foto 2" className={`foto-2 ${load ? '' : 'hidden'}`} />
          {!load && <AboutSkeletonImages />}
        </div>
        <article className="article-about">
          {content ?
          <>
            <Helmet>
              <meta property="og:type" content="article" />
              <meta property="og:title" content="Dagingue | Beef Slice Bogor" />
              <meta property="og:description" content="Menjual beef slice dengan berbagai varian bumbu." />
              <meta property="og:url" content="https://dagingue.vercel.app/" />
              <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/about%2Fabout-us.jpg?alt=media&token=d49211d1-08ae-4664-b9f2-139ba96affa3" />
              <meta property="og:image:width" content="282" />
              <meta property="og:image:height" content="282" />
              <meta property="twitter:title" content="Dagingue | Beef Slice Bogor" />
              <meta property="twitter:description" content="Menjual beef slice dengan berbagai varian bumbu." />
              <meta property="twitter:creator" content="@kecoaberotak" />
              <meta property="twitter:site" content="@kecoaberotak" />
              <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/about%2Fabout-us.jpg?alt=media&token=d49211d1-08ae-4664-b9f2-139ba96affa3" />
              <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <h3>Tentang Dagingue</h3>
            <div dangerouslySetInnerHTML={{__html:content}}></div>
          </>
          :
          <AboutArticleSkeleton />
          }
        </article>
      </section>
    </Fragment>
  );
};

export default About;