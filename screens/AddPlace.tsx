import { View, Text } from 'react-native'
import React from 'react'
import PlaceForm, { primitivePlace } from '../components/Places/PlaceForm'
import { Place } from '../models/places';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const AddPlace = () => {
  const {navigate}=useNavigation<NativeStackNavigationProp<any>>()

  const handlePlaceObj=(place:Place)=>{
    console.log(place)
    navigate('AllPlaces',{
      place
    })


  }
  return (
    <View>
      <PlaceForm handlePlaceObj={handlePlaceObj}/>
    </View>
  )
}

export default AddPlace