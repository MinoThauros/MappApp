import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import OutlinedButton from '../components/UI/OutlinedButton'
import { useGetPlaceById } from '../Hooks/DBHooks'
import { useRoute } from '@react-navigation/native'
import { Colors } from '../constants/colors'
import {format as prettyFormat} from 'pretty-format';
import { Place } from '../models/places'
import { useNavigation } from '@react-navigation/native'
import { IconButton } from '@react-native-material/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const PlaceDetails = () => {
  //we will navigate to this screen but
  //id will be passed as a prop but the parent component
  const {params:{id}}=useRoute() as any;//gotta do better
  const {data,isLoading,isError}=useGetPlaceById({id})
  const Data=data as Place
  const {navigate}=useNavigation<NativeStackNavigationProp<any>>()

  const showOnMap=()=>{
    const Data=data as any
    console.log('show on map',prettyFormat(Data));

    navigate('Map',{
      lng:Data.lng,
      lat:Data.lat,
    })
 
    
  }


  if(isLoading){
    return <Text>Loading...</Text>
  }



  if(isError){
    return <Text>An error happened</Text>
  }
  return (
    <ScrollView>
      <Image source={{uri:Data.imageUri}} style={styles.image}/>
      <View style={styles.locationContainer}>
        <Text style={styles.address}>{Data.address}</Text>
      </View>
      <OutlinedButton icon="map" onPress={showOnMap}>View on Map</OutlinedButton>
    </ScrollView>
  )
  
}

export default PlaceDetails

const styles = StyleSheet.create({
  image:{
    height:'35%',
    width:'100%',
    minHeight:300
  },
  locationContainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  addressContainer:{
    padding:20,
  },
  address:{
    color:Colors.primary500,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16
  }

})