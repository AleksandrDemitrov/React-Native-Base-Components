import React from 'react';
import {Pressable} from 'react-native';

import Box from '../../Box';
import Text from '../../Text';

interface ItemProps {
  label: string;
  onPress: () => void;
}

const Item = ({label, onPress}: ItemProps) => {
  return (
    <Pressable onPress={onPress}>
      {({pressed}) => {
        return (
          <Box
            alignItems="center"
            justifyContent="center"
            px={12}>
            <Box
              bg={pressed ? 'rgba(255,255,255, 0.1)' : null}
              height={60}>
              <Text fontFamily="book" fontSize={1}>
                {label}
              </Text>
            </Box>
          </Box>
        );
      }}
    </Pressable>
  );
};

export default Item;
