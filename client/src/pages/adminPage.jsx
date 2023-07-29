import '../assets/admin-page-css/admin-page.css'
import { Fragment } from 'react';
import Navbar from '../components/fragments/Navbar';
import AdminPanel from '../components/layouts/Admin/AdminPanel';
import PrivateRoute from '../routes/PrivateRoutes';

const AdminPage = () => {
  return(
    <Fragment>
      <Navbar/>
      <PrivateRoute>
        <AdminPanel></AdminPanel>
      </PrivateRoute>
    </Fragment>
  );
}

export default AdminPage;