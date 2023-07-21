import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <section className="about" id="about">
        <div className="image-about">
          <img src="./images/about-us.jpg" alt="foto 1" className="foto-1" />
          <img src="./images/product-2.jpg" alt="foto 2" className="foto-2" />
        </div>
        <article className="article-about">
          <h3>Tentang Dagingue</h3>
          <h1>Menyediakan Beef Slice<br />Terbaik Untuk Anda</h1>
          <p>Dagingue menyediakan Beef Slice dengan dengan<br />varian bumbu dan jenis potongan sesuai selera anda.</p>
          <p>Ada dua jenis potong daging yang kami sediakan.<br />Potongan tipis ala korean barberque dan potongan<br />dadu yang tebal.</p>
          <ul>
            <p>Varian Bumbu :</p>
            <li> Spicy Korean</li>
            <li> Bulgogi</li>
            <li> Lada Hitam</li>
            <li> Teriyaki Garlic</li>
            <li> Barbeque</li>
          </ul>
        </article>
      </section>
    </Fragment>
  );
};

export default About;