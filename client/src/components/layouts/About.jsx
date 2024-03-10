import { Fragment, useEffect, useState } from "react";
import { getContent } from "../../services/about-service";
import AboutArticleSkeleton from "./Skeleton/AboutArticleSkeleton";
import AboutSkeletonImages from "./Skeleton/AboutSkeletonImages";

const About = () => {
  const [data, setData] = useState();
  const [srcPreview, setSrcPreview] = useState();
  const [srcPreview2, setSrcPreview2] = useState();
  const [content, setContent] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getContent((res) => setData(res.data[0]));
  }, []);

  useEffect(() => {
    if (data) {
      setContent(data.content);
      setSrcPreview(data.file1);
      setSrcPreview2(data.file2);
    }
  }, [data]);

  const onLoad = () => {
    setLoad(true);
  };

  return (
    <Fragment>
      <section className="about" id="about">
        <div className="image-about">
          <img
            src={srcPreview}
            alt="Tentang Dagingue"
            title="Tentang Dagingue"
            className={`foto-1 ${load ? "" : "hidden"}`}
            onLoad={onLoad}
          />
          <img
            src={srcPreview2}
            alt="Produk Dagingue"
            title="Produk Dagingue"
            className={`foto-2 ${load ? "" : "hidden"}`}
          />
          {!load && <AboutSkeletonImages />}
        </div>
        <article className="article-about">
          {content ? (
            <>
              <h1>Tentang Dagingue Bogor</h1>
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                data-testid="article-content"
              ></div>
            </>
          ) : (
            <AboutArticleSkeleton />
          )}
        </article>
      </section>
    </Fragment>
  );
};

export default About;
