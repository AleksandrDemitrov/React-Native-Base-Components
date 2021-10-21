import React from 'react';

import Layout from '../Layouts/Main';
import SlideComponent from '../Components/Slide';
import Box from '../Components/Box';
const Slide = () => {
  return (
    <Layout>
      <Box display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%">
        <SlideComponent width={300} height={450} url="slider1.jpg" description="That is an placeholder text. Here could be yur ad or just a long text" />
      </Box>
    </Layout>
  );
};

export default Slide;
