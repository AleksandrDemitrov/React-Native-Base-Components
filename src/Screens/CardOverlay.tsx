import React from 'react';
import Layout from '../Layouts/Main';
import Box from '../Components/Box';
import CardOverlayComponent from '../Components/CardOverlay';

const CardOverlay = () => {
  return (
    <Layout>
      <Box height="100%" justifyContent="flex-end">
        <CardOverlayComponent title="HEADLINE" content="That is an placeholder text. Here could be your ad or just a long text" />
      </Box>
    </Layout>
  );
};

export default CardOverlay;
