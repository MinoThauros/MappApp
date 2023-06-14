import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MapView,{Marker} from 'react-native-maps'
import { Location } from '../models/places'

const Map = () => {
    const [selectedLocation,setSelectedLocation]=useState<Location>()
    const initialRegion={
        latitude:37.78,
        longitude:-122.43,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421
    }
    const selectLocationHandler=(event:any)=>{
        const lat:number=event.nativeEvent.coordinate.latitude
        const lng:number=event.nativeEvent.coordinate.longitude
        setSelectedLocation({
            lat,
            lng
        })
    }
  return (
    <MapView 
    initialRegion={initialRegion}
    style={{flex:1}}
    onPress={selectLocationHandler}>
        {
            selectedLocation&&<Marker title="Picked Location" coordinate={{latitude:selectedLocation.lat,longitude:selectedLocation.lng}}></Marker>
        }
    </MapView>
  )
}

export default Map