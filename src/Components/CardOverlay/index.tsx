import React from 'react';

import Box from '../Box';
import Text from '../Text';
import Close from '../../Icons/Close';

interface CardOverlayProps {
  title: string;
  content: string;
}

const CardOverlay = ({
  title,
  content
}: CardOverlayProps) => {
  return (
    <Box
        display="flex"
        width="100%"
        height={200}
        bg="#8a8e8f"
        borderTopLeftRadius={7}
        borderTopRightRadius={7}
      >
        <Box>
          <Box flexDirection="row" mt={50}>
            <Text color="#f3f4f4" fontFamily="Bitter-Regular" fontSize={30} ml={40}>
              {title}
            </Text>
            <Box position="absolute" right={0} width={24} height={24} mt={4} mr={40}><Close/></Box>
          </Box>
          <Box flexDirection="row" mt={40}>
            <Text color="#f3f4f4" fontFamily="Bitter-Regular" fontSize={16} pl={40} pr={40}>
              {content}
            </Text>
          </Box>
        </Box>
      </Box>
  );
};

export default CardOverlay;
