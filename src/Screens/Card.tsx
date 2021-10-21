import React from 'react';

import Layout from '../Layouts/Main';
import CardComponent from '../Components/Card';
import Box from '../Components/Box';
const Card = () => {
  return (
    <Layout>
      <Box display="flex"
          mt={250}
          ml={80}
          height="100%">
        <CardComponent width={140} height={170} url="slider1.jpg" description="HEADLINE" />
      </Box>
    </Layout>
  );
};

export default Card;
