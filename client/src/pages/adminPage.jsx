import { Fragment, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/fragments/Navbar';
import Dashboard from '../components/layouts/Admin/Dashboard';
import PrivateRoute from '../routes/PrivateRoutes';
import { LoginStatus } from '../contexts/LoginStatus';
import DisplayStatusProvider from '../contexts/DisplayStatus';
import { Helmet } from 'react-helmet-async';

import '../index.css';

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
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Admin Page | Dagingue</title>
      </Helmet>
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