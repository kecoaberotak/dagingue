import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonInfoImage = () => {
  return (
    <div className="gallery-info-image border-[3px] border-merah w-[138px] h-[138px] sm:w-[276px] sm:h-[276px]">
      <Skeleton width={`100%`} height={`98%`}/>
      <div className='w-[130px] h-[130px]'></div>
    </div>
  )
}

export default SkeletonInfoImage;