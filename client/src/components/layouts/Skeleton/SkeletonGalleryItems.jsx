import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonGalleryItems = () => {
  return (
    <section className="gallery-items" data-testid="skeleton-gallery-items">
      <div className="w-[66px] h-[66px] sm:w-[132px] sm:h-[132px]">
        <Skeleton height={`100%`} />
      </div>
      <div className="w-[66px] h-[66px] sm:w-[132px] sm:h-[132px]">
        <Skeleton height={`100%`} />
      </div>
      <div className="w-[66px] h-[66px] sm:w-[132px] sm:h-[132px]">
        <Skeleton height={`100%`} />
      </div>
      <div className="w-[66px] h-[66px] sm:w-[132px] sm:h-[132px]">
        <Skeleton height={`100%`} />
      </div>
      <div className="w-[66px] h-[66px] sm:w-[132px] sm:h-[132px]">
        <Skeleton height={`100%`} />
      </div>
    </section>
  );
};

export default SkeletonGalleryItems;
