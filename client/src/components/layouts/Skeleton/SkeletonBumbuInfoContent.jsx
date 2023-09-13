import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonBumbuInfoContent = () => {
  return (
    <div className="gallery-info-bumbu">
      <h2 className='w-[120px] sm:w-[150px]'>
        <Skeleton width={`100%`}/>
      </h2>
      <div className='w-[190px] h-[60px] sm:w-[276px] sm:h-[100px]'>
        <Skeleton width={`100%`} height={`98%`}/>
      </div>
    </div>
  )
}

export default SkeletonBumbuInfoContent;