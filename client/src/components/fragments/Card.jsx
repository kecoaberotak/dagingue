import { useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Card = (props) => {
  const {tipe, berat, image} = props
  const [load, setLoad] = useState(false);

  const onLoad = () => {
    setLoad(true);
  }

  return(
    <div className="card">
      <section className="card-product">
          <img className={`potong-img ${load ? '' : 'hidden'}`} src={image} alt={tipe} title={tipe} onLoad={onLoad}/>
          {!load && <Skeleton height={`100%`} />}
      </section>
      <section className="card-product-info">
        <p>{tipe}</p>
        <p>{berat}</p>
      </section>
    </div>
  );
};

export default Card;