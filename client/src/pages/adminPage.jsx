import '../assets/admin-page-css/admin-page.css'
import { Fragment } from 'react';
import Navbar from '../components/fragments/Navbar';
import AdminPanel from '../components/layouts/Admin/AdminPanel';

const AdminPage = () => {
  return(
    <Fragment>
      <Navbar/>
      <AdminPanel></AdminPanel>
    </Fragment>
  );
}

export default AdminPage;