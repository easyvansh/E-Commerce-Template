import { StyleSheet, Text, View,Pressable,Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CartListItem from '../components/CartListItem'
import cart from '../data/cart'
import { useSelector } from 'react-redux'
import { selectDeliveryPrice, selectSubtotal } from '../store/cartSlice'

const { height, width } = Dimensions.get("window");

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal)
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);
  return(
    <View style = {styles.totalsContainer}>
    <View style = {styles.row}>
    <Text style = {styles.text}>Subtotal</Text>
    <Text style = {styles.text}>{subtotal}</Text>
    </View>
    <View style = {styles.row}>
    <Text style = {styles.text}>Delivery</Text>
    <Text style = {styles.text}>$ {deliveryFee}</Text>
    </View><View style = {styles.row}>
    <Text style = {styles.textBold}>Total</Text>
    <Text style = {styles.textBold}>$ {total}</Text>
    </View>
    </View>
    
)};

const  ShoppingCart = () => {
  const cartItems = useSelector(state =>state.cart.items)
  return (
    <>
    
    <FlatList data = {cartItems} renderItem = {({item})=> <CartListItem cartItem={item}/>}
    ListFooterComponent={ ShoppingCartTotals}
    />
    <Pressable o style = {styles.button}>
                <Text style = {styles.buttonText}>CheckOut</Text>
          </Pressable>
</>
  )
}

const styles = StyleSheet.create({
    totalsContainer:{
        margin:20,
       paddingTop:20,
       borderColor:'gainsboro',
       borderTopWidth:1,
    },
    row :{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:2,
    },
    text:{
        fontSize:18,
        color:'gray'
    },
    textBold:{
        fontSize:18,
        fontWeight:'500',
    },
    button:{
        position:'absolute',
        backgroundColor:'black',
        bottom:30,
        width:width*0.9,
        alignSelf:'center',
        padding:20,
        borderRadius:100,
        alignItems:'center'
      },
      buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize: 16,
      }
})
export default ShoppingCart;