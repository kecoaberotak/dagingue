const Card = (props) => {
  const {tipe, berat, image, key} = props
  return(
    <div className="card" key={key}>
      <section className="card-product">
          <img className="potong-1" src={image} alt="404" />
      </section>
      <section className="card-product-info">
        <p>{tipe}</p>
        <p>{berat}</p>
      </section>
    </div>
  );
};

export default Card;