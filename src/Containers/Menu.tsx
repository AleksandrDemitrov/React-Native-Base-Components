import React from 'react';
import Menu, {MenuItem} from '../Screens/Menu';
import {MainStackProps} from '../Navigation/types';

const items: MenuItem[] = [
  {
    label: 'Text',
    route: 'TextCollection',
  },
  {
    label: 'Icons',
    route: 'Icons',
  },
  {
    label: 'CardOverlay',
    route: 'CardOverlay',
  },
  {
    label: 'Button',
    route: 'Button',
  },
  {
    label: 'Slide',
    route: 'Slide',
  },
  {
    label: 'Slider',
    route: 'Slider',
  },
  {
    label: 'TextBox',
    route: 'TextBox',
  },
  {
    label: 'Card',
    route: 'Card',
  },
  {
    label: 'Teaser',
    route: 'Teaser',
  },
  {
    label: 'Header',
    route: 'Header',
  },
  {
    label: 'Footer',
    route: 'Footer',
  },
];

const MenuContainer = ({navigation}: MainStackProps<'Menu'>) => {
  const onItemPress = (item: MenuItem) => {
    if (item.route) {
      navigation.navigate(item.route);
    }
  };
  return (
    <Menu
      title=""
      items={items}
      onItemPress={onItemPress}
    />
  );
};

export default MenuContainer;
