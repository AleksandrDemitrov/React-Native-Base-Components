import React from 'react';

import Box from '../Box';
import Text from '../Text';

import Move from '../../Icons/Move';
import Back from '../../Icons/Back';

interface HeaderProps {
  text: string;
}

const Header = ({
  text,
}: HeaderProps) => {
  return (
      <Box 
      bg="#ffffff"
      pt={20}
      pb={10}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      >
      <Box width={14} height={14} color="black"><Move/></Box>
      <Box flexDirection="row" width="100%" display="flex" justifyContent="center" pt={20} pb={10}>
        <Box width={20} position="absolute" left={0} mt={23} height={20} ml={50}><Back/></Box>
        <Text color="#7d8a8a" fontFamily="Bitter-Regular" fontSize={20}>
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
