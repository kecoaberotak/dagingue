import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminAbout from "./AdminAbout";

import '../../../assets/admin-page-css/admin-page.css'

const AdminPanel = () => {
  const [halaman, setHalaman] = useState('');

  const handleHalaman = e => {
    setHalaman(e.target.getAttribute('value'));
  }

  useEffect(() => {
    
  }, [halaman]);

  return(
    <Fragment>
      <section className="admin-panel">
        <nav className="content-nav">
          <ul>
            <li><Link to="#" onClick={handleHalaman} value='about'>About</Link></li>
            <li><span>/</span></li>
            <li><Link to="#" onClick={handleHalaman} value='bumbu'>Bumbu</Link></li>
            <li><span>/</span></li>
            <li><Link to="#" onClick={handleHalaman} value='potong'>Potongan</Link></li>
          </ul>
        </nav>
        <main className="admin-panel-content">
          <AdminAbout></AdminAbout>
        </main>
      </section>
    </Fragment>
  );
}

export default AdminPanel;