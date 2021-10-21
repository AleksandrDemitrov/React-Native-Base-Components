import React from 'react';

import Layout from '../Layouts/Main';
import Box from '../Components/Box';
import Text from '../Components/Text';
const TextCollection = () => {
    
  return (
    <Layout>
      <Box
          ml={70}
          width="100%">
        <Text color="black" fontFamily="babelsans" fontSize={16} fontWeight='500' >
          Archivo Narrow
        </Text>
        <Text color="black" fontFamily="Bitter-Regular" fontSize={13} fontWeight='500' pt={10} >
          Zilla Slab
        </Text>
        <Text color="black" fontFamily="babelsans" fontSize={30} fontWeight='500' pt={50}>
          Archivo Narrow
        </Text>
        <Text color="black" fontFamily="babelsans" fontSize={25} fontWeight='500' pt={17}>
          Archivo Narrow
        </Text>
        <Text color="black" fontFamily="babelsans" fontSize={20} fontWeight='500' pt={13}>
          Archivo Narrow
        </Text>
        <Text color="black" fontFamily="babelsans" fontSize={18} fontWeight='500' pt={10}>
          Archivo Narrow
        </Text>
        <Text color="black" fontFamily="babelsans" fontSize={15} fontWeight='500' pt={4}>
          Archivo Narrow
        </Text>
      </Box>
    </Layout>
  );
};

export default TextCollection;
