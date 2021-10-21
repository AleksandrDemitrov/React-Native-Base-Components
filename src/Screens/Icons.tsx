import React from 'react';

import Layout from '../Layouts/Main';
import Box from '../Components/Box';
import { ScrollView } from 'react-native';
import List from '../Icons/List';
import Flash from '../Icons/Flash';
import Home from '../Icons/Home';
import Bike from '../Icons/Bike';
import Quarters from '../Icons/Quarters';
import Car from '../Icons/Car';
import Office from '../Icons/Office';
import CheckCircled from '../Icons/CheckCircled';
import Trailer from '../Icons/Trailer';
import Move from '../Icons/Move';
import Gastronomy from '../Icons/Gastronomy';
import Close from '../Icons/Close';
import Back from '../Icons/Back';

const Icons = () => {
  return (
    <Layout>
      <ScrollView>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%">

            <Box width={70} height={70} margin={40}>
              <List />
            </Box>
            <Box width={70} height={70} margin={40}>
              <Flash />
            </Box>
            <Box width={70} height={70} margin={40}>
              <Home />
            </Box>
            <Box width={70} height={70} margin={40}>
              <Bike />
            </Box>
            <Box width={70} height={70} margin={40}>
              <Quarters />
            </Box>
            <Box width={70} height={70} margin={40}>
              <Car />
            </Box>
            <Box width={70} height={70} margin={40}>
              <Office />
            </Box>
            <Box width={70} height={70} margin={40}>
              <Back />
            </Box>
            <Box width={70} height={70} margin={40}>
              <CheckCircled />
            </Box>
            <Box width={70} height={70} margin={40}>
              <Trailer />
            </Box>
            <Box width={70} height={70} margin={40}>
              <Move />
            </Box>
            <Box width={70} height={70} margin={40}>
              <Gastronomy />
            </Box>
            <Box width={70} height={70} margin={40}>
              <Close />
            </Box>
        </Box>
        </ScrollView>
    </Layout>
  );
};

export default Icons;
