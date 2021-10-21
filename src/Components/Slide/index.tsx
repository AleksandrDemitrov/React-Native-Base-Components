import React from 'react';
import { Image } from 'react-native';

import Box from '../Box';
import Text from '../Text';

interface SlideProps {
  url: string;
  width: number;
  height: number;
  description: string;
}

const Slide = ({
  url,
  width,
  height,
  description
}: SlideProps) => {
  return (
    <Box width={width} height={height} bg="#7a8081" borderRadius={10}>
      <Image  style={{ width: width, height: height/2 }} borderTopLeftRadius={10} borderTopRightRadius={10} resizeMode="cover"
      source={{ uri: 'asset:/' + url }}>
      </Image>
      <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={height/2}>
        <Text color="white" lineHeight="25px" p={30} fontFamily="" fontSize={17}>
        {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Slide;
