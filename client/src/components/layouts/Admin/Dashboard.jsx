import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProductPotong from "./ProductPotong";
import ProductBumbu from './ProductBumbu';
import { DisplayStatus } from "../../../contexts/DisplayStatus";

import '../../../assets/admin-page-css/admin-page.css'

const AdminPanel = () => {
  const [halaman, setHalaman] = useState('');
  const {setDisplayStatus} = useContext(DisplayStatus);

  const handleHalaman = e => {
    setHalaman(e.target.getAttribute('value'));
    setDisplayStatus('show');
  }

  return(
    <Fragment>
      <section className="admin-panel">
        <nav className="content-nav">
          <ul>
            <li><Link to="#" onClick={handleHalaman} value='bumbu'>Bumbu</Link></li>
            <li><span>/</span></li>
            <li><Link to="#" onClick={handleHalaman} value='potong'>Potongan</Link></li>
          </ul>
        </nav>
        <main className="admin-panel-content">
          {halaman === '' ? <ProductBumbu /> : halaman === 'bumbu' ? <ProductBumbu /> : <ProductPotong />}
        </main>
      </section>
    </Fragment>
  );
}

export default AdminPanel;