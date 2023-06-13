import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OutlinedButton from '../UI/OutlinedButton'
import { Colors } from '../../constants/colors'
import {getCurrentPositionAsync, useForegroundPermissions, PermissionStatus} from 'expo-location'
import verifyPermissions from '../../utils/DeviceNative/PermissionsManager'

/**
 * Background on LocationPicker:when app isnt currently being viewed
 * Foreground on LocationPicker:when app is currently being viewed
 * @returns 
 */
const LocationPicker = () => {
    const [locationPermissionInfo,requestPermission]=useForegroundPermissions()
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
        console.log(location)

    }

    const pickOnMapHandler=()=>{

    }
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton  onPress={getLocationHandler} icon="location">Locate user</OutlinedButton>
        <OutlinedButton  onPress={()=>{}} icon="map">Pick on Map</OutlinedButton>
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

    }
})