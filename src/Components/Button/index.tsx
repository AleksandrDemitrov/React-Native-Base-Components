import React from 'react';

import Box from '../Box';
import Text from '../Text';
import Quarters from '../../Icons/Quarters';
interface ButtonProps {
  text: string;
}

const Button = ({
  text
}: ButtonProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Box 
        bg="#ffffff"
        pt={10}
        pb={10}
        width="80%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius={10}>
        <Box width={24} height={24}><Quarters/></Box>
        <Text color="#7d8a8a" fontFamily="Bitter-Regular" fontSize={20}>
        {text}
        </Text>
      </Box>
    </Box>
  );
};

export default Button;
