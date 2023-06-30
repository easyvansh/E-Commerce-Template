import React from 'react'
import { StyleSheet, Text, View ,Image,FlatList,Dimensions,Pressable} from 'react-native'
import products from '../data/products'
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get("window");

const HomePage = () => {
  const navigation = useNavigation()
  return (
      <FlatList
      data = {products}
      renderItem = {({item}) =>  (
        <Pressable onPress = {() => navigation.navigate('Product Details')} style={styles.itemContainer}>
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