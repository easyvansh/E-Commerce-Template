import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import ProductDetails from '../screens/ProductDetails';
import ShoppingCart from '../screens/ShoppingCart';
import { Pressable,Text } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
            <Stack.Screen name = "Home" component ={HomePage} options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{ flexDirection: 'row' ,padding:20 }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: '500' }}>1</Text>
            </Pressable>),
            })}
            />
            <Stack.Screen name = "Product Details" component ={ProductDetails} options ={{presentation:'modal'}}/>
            <Stack.Screen name = "Cart" component ={ShoppingCart}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;