import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import OutlinedButton from '../UI/OutlinedButton'
import { Colors } from '../../constants/colors'
import {getCurrentPositionAsync, useForegroundPermissions, PermissionStatus} from 'expo-location'
import verifyPermissions from '../../utils/DeviceNative/PermissionsManager';
import { Location } from '../../models/places'
import getMapPreview from '../../utils/GoogleMaps/maps'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useGetAddress } from '../../Hooks/Maps'

type LocationPickerProps={
    onLocationPicked:(location:{lat:number,lng:number},address:string)=>void
}

/**
 * Background on LocationPicker:when app isnt currently being viewed
 * Foreground on LocationPicker:when app is currently being viewed
 * @returns 
 */
const LocationPicker = ({onLocationPicked}:LocationPickerProps,address:string) => {
    const [pickedLocation,setPickedLocation]=useState<Location>()
    const [locationPermissionInfo,requestPermission]=useForegroundPermissions()
    const navigation=useNavigation<NativeStackNavigationProp<any>>()
    const route=useRoute() as any
    const isFocused=useIsFocused()

    useEffect(()=>{
        const {lat,lng}:Location=route.params? route.params.pickedLocation:{lat:null,lng:null};
        if(isFocused && lat && lng){
            setPickedLocation({
                lat,
                lng
            })

        }
    },[isFocused])

    const onSuccessHandler=(address:string)=>{
        Alert.alert('Address fetched',address,[{text:'OK'}])
        if(pickedLocation){
             onLocationPicked(pickedLocation,address)
        }
       

    }


    
    const {refetch,data}=useGetAddress({lat:pickedLocation?.lat,lng:pickedLocation?.lng},onSuccessHandler)

    useEffect(()=>{
        if(pickedLocation){
            refetch()
        }
    },[pickedLocation,onLocationPicked])
    //chance of infinite loop-useEffect calls a function from the dependency array

    const checkPermissions=async ()=>{
        return await verifyPermissions(
        {
            permissionState:{
                permission:locationPermissionInfo,
                requestPermission
            },
        PermissionStatus
        })
    }

    const getLocationHandler=async ()=>{
        const hasPermission=await checkPermissions()
        if(!hasPermission){
            return
        }
        const location=await getCurrentPositionAsync()
        setPickedLocation({
            lat:location.coords.latitude,
            lng:location.coords.longitude
        })

    };
    let LocationPreview=<Text>No location Picked</Text>

    if(pickedLocation){
        LocationPreview=<Image 
        style={styles.image}
        source={{uri:getMapPreview({lat:pickedLocation.lat,lng:pickedLocation.lng})}} />
    }

    const pickOnMapHandler=()=>{
        navigation.navigate('Map')

    }
  return (
    <View>
      <View style={styles.mapPreview}>
       {LocationPreview}
      </View>
      <View style={styles.actions}>
        <OutlinedButton  onPress={getLocationHandler} icon="location">Locate user</OutlinedButton>
        <OutlinedButton  onPress={pickOnMapHandler} icon="map">Pick on Map</OutlinedButton>
      </View>
    </View>
  )
}

export default LocationPicker

const styles = StyleSheet.create({
    mapPreview:{
        width:'100%',
        height:200,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary100,
        borderRadius:4,
        overflow:'hidden'

    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

    },
    image:{
        width:'100%',
        height:'100%'
    }
})