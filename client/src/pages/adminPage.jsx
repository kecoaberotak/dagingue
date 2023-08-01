import '../assets/admin-page-css/admin-page.css'
import { Fragment, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/fragments/Navbar';
import Dashboard from '../components/layouts/Admin/Dashboard';
import PrivateRoute from '../routes/PrivateRoutes';
import { LoginStatus } from '../contexts/LoginStatus';
import DisplayStatusProvider from '../contexts/DisplayStatus';

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
      <DisplayStatusProvider>
        <Dashboard></Dashboard>
      </DisplayStatusProvider>
      </PrivateRoute>
    </Fragment>
  );
}

export default AdminPage;