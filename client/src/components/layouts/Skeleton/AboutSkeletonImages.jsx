import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSkeletonImages = () => {
  return (
    <>
    <div className='foto-1'>
      <Skeleton height={250}></Skeleton>
    </div>
    <div className='foto-2'>
      <Skeleton height={200}></Skeleton>
    </div>
    </>
  )
}

export default AboutSkeletonImages;