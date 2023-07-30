import '../assets/admin-page-css/admin-page.css'
import { Fragment } from 'react';
import Navbar from '../components/fragments/Navbar';
import Dashboard from '../components/layouts/Admin/Dashboard';
import PrivateRoute from '../routes/PrivateRoutes';

const AdminPage = () => {
  return(
    <Fragment>
      <Navbar/>
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    </Fragment>
  );
}

export default AdminPage;