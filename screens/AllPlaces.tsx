import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import PlacesList from '../components/Places/PlacesList';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { Place } from '../models/places';

const AllPlaces = () => {
  const [places,setPlaces]=useState<Place[]>([])
  const {params}=useRoute() as any
  const isFocused=useIsFocused()

  useEffect(()=>{
    if(params && params.place && isFocused){
      setPlaces(prevPlaces=>[...prevPlaces,params.place])
    }
  },[params,isFocused])
  return (
    <PlacesList places={places}/>
  )
}

export default AllPlaces