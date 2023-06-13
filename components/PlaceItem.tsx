import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PlaceProp } from '../models/places'
import { Colors } from '../constants/colors'

const PlaceItem = ({place,onSelect}:{place:PlaceProp,onSelect?:()=>void}) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{uri:place.imageUri}}/>
      <View>
        <Text style={{color:Colors.primary200}}>{place.title}</Text>
        <Text style={{color:Colors.primary200}}>{place.address}</Text>
      </View>
    </Pressable>
  )
}

export default PlaceItem

const styles = StyleSheet.create({

})