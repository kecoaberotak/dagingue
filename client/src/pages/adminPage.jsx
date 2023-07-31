import '../assets/admin-page-css/admin-page.css'
import { Fragment, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/fragments/Navbar';
import Dashboard from '../components/layouts/Admin/Dashboard';
import PrivateRoute from '../routes/PrivateRoutes';
import { LoginStatus } from '../contexts/LoginStatus';

const AdminPage = () => {
  const {loginStatus} = useContext(LoginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if(!loginStatus){
      navigate('/login');
    }
  }, [loginStatus, navigate])

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