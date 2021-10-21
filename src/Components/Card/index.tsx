import React from 'react';
import { Image } from 'react-native';

import Box from '../Box';
import Text from '../Text';

interface CardProps {
  url: string;
  width: number;
  height: number;
  description: string;
}

const Card = ({
  url,
  width,
  height,
  description
}: CardProps) => {
  return (
    <Box width={width} height={height}>
      <Image  style={{ width: width, height: height }} borderTopLeftRadius={10} borderTopRightRadius={10} resizeMode="cover"
      source={{ uri: 'asset:/' + url }}>
      </Image>
      <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#7a8081"
      borderBottomRightRadius={10}
      borderBottomLeftRadius={10}
      >
        <Text color="white" p={15} fontFamily="Bitter-Regular" fontSize={17}>
        {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
