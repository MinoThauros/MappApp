import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import PlacesList from '../components/Places/PlacesList';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { Place } from '../models/places';
import { useGetAllPlaces } from '../Hooks/DBHooks';
import { fetchAllPlaces } from '../utils/DB';
import { Button } from '@react-native-material/core';
import {format as prettyFormat} from 'pretty-format';

const AllPlaces = () => {
  const [places,setPlaces]=useState<Place[]>([])
  const {params}=useRoute() as any
  const isFocused=useIsFocused()
  const {data}=useGetAllPlaces()

  useEffect(()=>{
    if(params && params.place && isFocused){
      setPlaces(prevPlaces=>[...prevPlaces,params.place])
      
    }
  },[params,isFocused])

  const showPlaces=async()=>{
    const placeZ=await fetchAllPlaces()
    console.log(prettyFormat(data as any))

  }

  return (
    <>
      <PlacesList places={places}/>
      <Button  title='click' onPress={showPlaces}>Get Data</Button>
    </>
    
  )
}

export default AllPlaces