import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PlaceProp } from '../models/places'
import { Colors } from '../constants/colors'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const PlaceItem = ({place}:{place:PlaceProp}) => {
  //receives a single place object
  const {navigate}=useNavigation<NativeStackNavigationProp<any>>()

  const onItemSelect=()=>{
    navigate('PlaceDetails',{id:place.id})
  }

  return (
    <Pressable onPress={onItemSelect} style={({pressed})=>[styles.item, pressed && styles.pressed]}>

    { place.imageUri.length ? <Image style={styles.image} source={{uri:place.imageUri}}/> : null}
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  )
}

export default PlaceItem

const styles = StyleSheet.create({
  item:{
    flexDirection:'row',
    alignItems:'flex-start',
    borderRadius:6,
    marginVertical:12,
    backgroundColor:Colors.primary500,
    elevation:2,
    shadowColor:'black',
    shadowOpacity:0.15,
    shadowOffset:{width:1,height:1},
    shadowRadius:2,
    overflow:'hidden',

  },
  image:{
    flex:1,
    borderBottomLeftRadius:4,
    borderTopLeftRadius:4,
    height:100,
  },
  pressed:{
    opacity:0.9
  },
  info:{
    flex:2,
    padding:12,
  },
  title:{
    fontWeight:'bold',
    fontSize:18,
    color:Colors.gray700
  },
  address:{
    fontSize:12,
    color:Colors.gray700
  }


})