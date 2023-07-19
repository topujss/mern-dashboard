import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Box width="100%" height="100%">
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
