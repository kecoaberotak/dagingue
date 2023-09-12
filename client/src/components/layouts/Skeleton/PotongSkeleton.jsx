import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PotongSkeleton = () => {
  return (
    <div className="card">
      <section className="card-product">
        <Skeleton height={150} />
      </section>
      <section className="card-product-info">
        <p>{<Skeleton />}</p>
        <p>{<Skeleton />}</p>
      </section>
    </div>
  )
}

export default PotongSkeleton;