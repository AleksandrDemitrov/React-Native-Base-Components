import React from 'react';

import Layout from '../Layouts/Main';
import HeaderComponent from '../Components/Header';
import Box from '../Components/Box';

const Header = () => {
  return (
    <Layout>
      <Box 
        height="100%"
        display="flex"
        justifyContent="center">
        <HeaderComponent text="MOBILEATSKONZEPT" />
      </Box>
    </Layout>
  );
};

export default Header;
