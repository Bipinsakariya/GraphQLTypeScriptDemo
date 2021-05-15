import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ScreenNames from '../utils/ScrerenNames';

const Home = createStackNavigator();
const HomeStack = () => {
  return (
    <Home.Navigator>
      <Home.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
    </Home.Navigator>
  );
};

export default HomeStack;
