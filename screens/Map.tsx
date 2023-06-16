import { View, Text, Alert } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import MapView,{Marker} from 'react-native-maps'
import { Location } from '../models/places'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import {IconButton} from '@react-native-material/core';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const Map = () => {
    const {navigate,setOptions}=useNavigation<NativeStackNavigationProp<any>>()
    
    const params=useRoute().params as any
    const initialRegion={
        latitude:params&&params.lat? params.lat:37.78,
        longitude: params&&params.lng? params.lng:-122.43,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421
    }
    const [selectedLocation,setSelectedLocation]=useState<Location>({
        lat:initialRegion.latitude,
        lng:initialRegion.longitude
    })
    const selectLocationHandler=(event:any)=>{
        const lat:number=event.nativeEvent.coordinate.latitude
        const lng:number=event.nativeEvent.coordinate.longitude
        if(params?.lng || params?.lat){
            return
        }
        setSelectedLocation({
            lat,
            lng
        })
    };

    const savePickedLocationHandler= useCallback(()=>{
    if (!selectedLocation){
        Alert.alert('No location picked','Please pick a location first',[ {text:'Okay'}]);
        return
    }
    navigate('AddPlace',{
        pickedLocation:selectedLocation})
    },[navigate,selectedLocation,setOptions])
    //function will only be recreated if navigate or selectedLocation changes

    useLayoutEffect(()=>{
        if(params?.lng || params?.lat){
            return
        }
        setOptions({
            headerRight:({tintColor})=>(
                <IconButton 
                    icon={
                        props=> <Ionicons {...props} name="save" size={24} />
                    } 
                    color={tintColor} 
                    onPress={savePickedLocationHandler}/>),
        })
    },[savePickedLocationHandler,initialRegion])
    //chance of infinite loop if savePickedLocationHandler is not a callback
    //function savePickedLocationHandler will only be recreated if navigate,
    //,selectedLocation or setOptions changes

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