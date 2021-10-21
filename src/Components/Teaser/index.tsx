import React from 'react';
import { Image } from 'react-native';

import Box from '../Box';
import Text from '../Text';
import List from '../../Icons/List';

interface TeaserProps {
  url: string;
  width: number;
  height: number;
  title: string;
  description: string;
}

const Teaser = ({
  url,
  width,
  height,
  title,
  description
}: TeaserProps) => {
  return (
    <Box width={width} height={height} bg="#efedeb" borderRadius={10}>
      <Image  style={{ width: width, height: height/2 }} borderTopLeftRadius={10} borderTopRightRadius={10} resizeMode="cover"
      source={{ uri: 'asset:/' + url }}>
      </Image>
      <Box
      alignItems="center"
      height={height/2}>
        <Box width={50} position="absolute" height={50} bg="#efedeb" borderRadius={100} mt={-25}><Box width={18} height={18} mt={13} ml={15}><List/></Box></Box>
        
        <Box display="flex" alignItems="center" justifyContent="center" p={20}>
          <Text color="#858585" lineHeight="25px" fontFamily="Bitter-Regular" fontSize={25} p={10}>
            {title}
          </Text>

          <Text textAlign="center" fontFamily="Bitter-Regular" color="#858585" lineHeight="20px" fontSize={14} pt={20}>
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Teaser;
