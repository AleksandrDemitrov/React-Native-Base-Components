import React from 'react';

import Box from '../Box';
import Text from '../Text';

import CheckCircled from '../../Icons/CheckCircled';

interface TextBoxProps {
  text: string;
}

const TextBox = ({
  text,
}: TextBoxProps) => {
  return (
      <Box 
        bg="#ffffff"
        pt={20}
        pb={10}
        width={300}
        borderRadius={10}
        flexDirection="row"
        boxShadow="5px 5px black"
        >
        <Box width={24} mt={3} height={24} ml={15} color="black"><CheckCircled/></Box>
        <Text color="#7d8a8a" pl={20} pr={40} fontFamily="Bitter-Regular" fontSize={15}>
          {text}
        </Text>
    </Box>
  );
};

export default TextBox;
