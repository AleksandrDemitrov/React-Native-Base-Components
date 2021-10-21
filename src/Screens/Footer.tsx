import React from 'react';

import Layout from '../Layouts/Main';
import Box from '../Components/Box';

const CardOverlay = () => {
  return (
    <Layout
      bottom={
        <Box
        display="flex"
        width="100%"
        height={50}
        bg="#8a8e8f"
        borderTopLeftRadius={7}
        borderTopRightRadius={7}
      />}
      />
  );
};

export default CardOverlay;
