import { useEffect, useState } from 'react';
import { getContent } from '../../../services/about-service';

const EditAbout = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getContent(res => setData(res.data[0]));
  }, []);

  return (
    <h1>Edit Content About</h1>
  )
}

export default EditAbout;