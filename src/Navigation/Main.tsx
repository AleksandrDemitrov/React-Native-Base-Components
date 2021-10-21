import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import Menu from '../Containers/Menu';
import Text from '../Components/Text';

import TextCollection from '../Containers/TextCollection';
import Icons from '../Containers/Icons';
import CardOverlay from '../Containers/CardOverlay';
import Button from '../Containers/Button';
import Slide from '../Containers/Slide';
import Slider from '../Containers/Slider';
import TextBox from '../Containers/TextBox';
import Card from '../Containers/Card';
import Teaser from '../Containers/Teaser';
import Header from '../Containers/Header';
import Footer from '../Containers/Footer';

const MainStack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{
            headerShown: true,
          }}>
          <MainStack.Screen 
            options={{ 
              headerShown: false,
            }}
            name="Menu"
            component={Menu}
            
          />
          <MainStack.Screen
            options={({ navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerLeft: () => (
                <Text
                  fontSize={17}
                  fontWeight='500'
                  pt={9}
                  pl={10}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  Back
                </Text>
              )})}
            name="TextCollection" component={TextCollection} />


          <MainStack.Screen
            options={({ navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerLeft: () => (
                <Text
                  fontSize={17}
                  fontWeight='500'
                  pt={9}
                  pl={10}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  Back
                </Text>
              )})}
            name="Icons" component={Icons} />


          <MainStack.Screen
            options={({ navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerLeft: () => (
                <Text
                  fontSize={17}
                  fontWeight='500'
                  pt={9}
                  pl={10}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  Back
                </Text>
              )})}
            name="CardOverlay" component={CardOverlay} />

          <MainStack.Screen
            options={({ navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerLeft: () => (
                <Text
                  fontSize={17}
                  fontWeight='500'
                  pt={9}
                  pl={10}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  Back
                </Text>
              )})}
            name="Button" component={Button} />

          <MainStack.Screen
            options={({ navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerLeft: () => (
                <Text
                  fontSize={17}
                  fontWeight='500'
                  pt={9}
                  pl={10}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  Back
                </Text>
              )})}
            name="Slide" component={Slide} />

          <MainStack.Screen
            options={({ navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerLeft: () => (
                <Text
                  fontSize={17}
                  fontWeight='500'
                  pt={9}
                  pl={10}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  Back
                </Text>
              )})}
            name="Slider" component={Slider} />


          <MainStack.Screen
            options={({ navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerLeft: () => (
                <Text
                  fontSize={17}
                  fontWeight='500'
                  pt={9}
                  pl={10}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  Back
                </Text>
              )})}
            name="TextBox" component={TextBox} />

          <MainStack.Screen
            options={({ navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerLeft: () => (
                <Text
                  fontSize={17}
                  fontWeight='500'
                  pt={9}
                  pl={10}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  Back
                </Text>
              )})}
            name="Card" component={Card} />

          <MainStack.Screen
            options={({ navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerLeft: () => (
                <Text
                  fontSize={17}
                  fontWeight='500'
                  pt={9}
                  pl={10}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  Back
                </Text>
              )})}
            name="Teaser" component={Teaser} />

          <MainStack.Screen
            options={({ navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerLeft: () => (
                <Text
                  fontSize={17}
                  fontWeight='500'
                  pt={9}
                  pl={10}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  Back
                </Text>
              )})}
            name="Header" component={Header} />

          <MainStack.Screen
            options={({ navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerLeft: () => (
                <Text
                  fontSize={17}
                  fontWeight='500'
                  pt={9}
                  pl={10}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  Back
                </Text>
              )})}
            name="Footer" component={Footer} />

        </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
