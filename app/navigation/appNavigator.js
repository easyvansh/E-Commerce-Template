import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import ProductDetails from '../screens/ProductDetails';

// const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // <HomePage/>
    <ProductDetails/>
  );
};

export default AppNavigator;