import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PotongSkeleton = () => {
  return (
    <div className="card" data-testid="potong-skeleton">
      <section className="card-product">
        <Skeleton height={`100%`} />
      </section>
      <section className="card-product-info">
        <p>{<Skeleton />}</p>
        <p>{<Skeleton />}</p>
      </section>
    </div>
  );
};

export default PotongSkeleton;
