import React from 'react';

import Layout from '../Layouts/Main';
import TeaserComponent from '../Components/Teaser';
import Box from '../Components/Box';
const Teaser = () => {
  return (
    <Layout>
      <Box display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%">
        <TeaserComponent width={300} height={450} url="slider1.jpg" title="HEADLINE" description="That is an placeholder text. Here could be yur ad or just a long text" />
      </Box>
    </Layout>
  );
};

export default Teaser;
