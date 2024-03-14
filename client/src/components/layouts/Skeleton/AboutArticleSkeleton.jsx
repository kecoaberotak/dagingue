import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AboutArticleSkeleton = () => {
  return (
    <div data-testid="skeleton-article">
      <Skeleton height={20} width={180}></Skeleton>
      <br />
      <Skeleton height={50}></Skeleton>
      <br />
      <Skeleton height={100}></Skeleton>
      <br />
      <Skeleton height={150} width={230}></Skeleton>
    </div>
  );
};

export default AboutArticleSkeleton;
