import { View, Text } from 'react-native'
import React from 'react'
import PlacesList from '../components/Places/PlacesList';
import { places } from '../FakeData/PlacesData';

const AllPlaces = () => {
  return (
    <PlacesList places={places}/>
  )
}

export default AllPlaces