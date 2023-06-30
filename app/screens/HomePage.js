import React from 'react'
import { StyleSheet, Text, View ,Image,FlatList,Dimensions,Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const {height, width} = Dimensions.get("window");


const HomePage = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const navigation = useNavigation()
  return (
      <FlatList
      data = {products}
      renderItem = {({item}) =>  (
        <Pressable onPress = {() =>{
          dispatch(productsSlice.actions.setSelectedProduct(item.id));
          navigation.navigate('Product Details');
        }}
           style={styles.itemContainer}>
      <Image source={{ uri: item.image}} style={styles.image} /> 
      </Pressable>
      )}
      keyExtractor = {item => item.id}
      numColumns={2}
      />
  )
}

const styles = StyleSheet.create({
    image:{
      aspectRatio: 1,
    },
    itemContainer:{ 
      width: width*0.5, 
      padding: 1 
    }
})
export default  HomePage;