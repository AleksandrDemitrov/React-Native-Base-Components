import styled from 'styled-components/native';
import {
  SpaceProps,
  ColorProps,
  BorderProps,
  FlexboxProps,
  border,
  space,
  color,
  flexbox,
  LayoutProps,
  layout,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  boxShadow,
  BoxShadowProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    BorderProps,
    FlexboxProps,
    LayoutProps,
    ShadowProps,
    BoxShadowProps,
    PositionProps {}

const Box = styled.View<BoxProps>`
  ${space};
  ${color};
  ${border};
  ${flexbox};
  ${layout};
  ${position};
  ${shadow};
  ${boxShadow};
`;

export default Box;
