import {StackScreenProps} from '@react-navigation/stack';

export type MainStackParams = {
    Menu: undefined;
    TextCollection: undefined;
    Icons: undefined;
    CardOverlay: undefined;
    Button: undefined;
    Slide: undefined;
    Slider: undefined;
    TextBox: undefined;
    Card: undefined;
    Teaser: undefined;
    Header: undefined;
    Footer: undefined;
};

export type MainStackProps<routeName extends keyof MainStackParams> =
  StackScreenProps<MainStackParams, routeName>;
