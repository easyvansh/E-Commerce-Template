import React from 'react'
import { StyleSheet, Text, View ,Image,FlatList,Dimensions} from 'react-native'
import products from '../data/products'

const {height, width} = Dimensions.get("window");

const HomePage = () => {
  return (
      <FlatList
      data = {products}
      renderItem = {({item}) =>  (
        <View style={styles.itemContainer}>
      <Image source={{ uri: item.image}} style={styles.image} /> 
      </View>
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