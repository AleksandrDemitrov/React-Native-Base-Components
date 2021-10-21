import React from 'react';

import Layout from '../Layouts/Main';
import Box from '../Components/Box';
import TextBoxComponent from '../Components/TextBox';

const TextBox = () => {
  return (
    <Layout>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%">
        <TextBoxComponent text="That is an placeholder text. Lorem IpSUM Lorem IpSUM Lorem IpSUM"/> 
      </Box>
    </Layout>
  );
};

export default TextBox;
