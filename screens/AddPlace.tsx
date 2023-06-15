import { View, Text } from 'react-native'
import React, { useState } from 'react'
import PlaceForm, { primitivePlace } from '../components/Places/PlaceForm'
import { Location, Place } from '../models/places';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { insertPlace } from '../utils/DB';
import { useStorePlace } from '../Hooks/DBHooks';

const AddPlace = () => {
  const [location, setLocation] =useState<Location>({
    lng: 0,
    lat: 0,
  })

  const onSuccess=({id}:{id:string})=>{

  }
  const {mutate}=useStorePlace({onSuccess},location)
  const {navigate}=useNavigation<NativeStackNavigationProp<any>>()

  const handlePlaceObj=(place:Place)=>{
    setLocation(place.location)
    mutate({place})
    navigate('AllPlaces',{
      place
    });


  }
  return (
    <View>
      <PlaceForm handlePlaceObj={handlePlaceObj}/>
    </View>
  )
}

export default AddPlace