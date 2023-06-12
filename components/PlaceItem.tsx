import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PlaceProp } from '../models/places'

const PlaceItem = ({place,onSelect}:{place:PlaceProp,onSelect?:()=>void}) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{uri:place.imageUri}}/>
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  )
}

export default PlaceItem

const styles = StyleSheet.create({

})