import React from 'react';

import Box from '../Components/Box';
import NavigationItem from '../Components/Navigation/Item';
import Layout from '../Layouts/Main';
import {MainStackParams} from '../Navigation/types';

export interface MenuItem {
  label: string;
  route?: keyof MainStackParams;
}

export interface MenuProps {
  title: string;
  items: MenuItem[];
  onItemPress(item: MenuItem): void;
}

const Menu = ({onItemPress, items}: MenuProps) => {
    
  return (
    <Layout>
      <Box
        justifyContent="center"
        alignItems="center"
        mt="10px"
        width="100%"
        height="100%"
        px={18}>
        {items.map((item, index) => (
          <Box key={index} pl={18} pr={18} width="100%">
            <NavigationItem
              label={item.label}
              onPress={() => onItemPress(item)}
            />
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
