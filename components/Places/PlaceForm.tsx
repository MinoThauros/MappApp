import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Colors } from '../../constants/colors'
import CustomTextInput from '../UI/CustomTextInput'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'
import Button from '../UI/Button'
import { Location, Place } from '../../models/places'

type FullAddress=Location&{address:string}
export type primitivePlace={
  title:string,
  image:string,
  location:FullAddress
}

const PlaceForm = ({handlePlaceObj}:{handlePlaceObj:(place:Place)=>void}) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [location, setLocation] = useState<FullAddress>()
  const savePlace=()=>{
    if(location){
      const address:FullAddress={
          lat:location.lat,
          lng:location.lng,
          address:location.address
        }
      const fullLocation=new Place(title,image,address)
      handlePlaceObj(fullLocation)
      }
    }

  const locationPickedHandler= useCallback((location:{lat:number,lng:number},address: string)=>{
    setLocation({...location,address})

  },[])

  const imagePickedHandler=(imageUri:string)=>{
    setImage(imageUri)

  }

  return (
    <ScrollView style={{margin:'5%'}}>
      <View style={{flex:1}}>
        <CustomTextInput title='Title' nextValue={setTitle}/>
      </View>
      <ImagePicker onImagePicked={imagePickedHandler} />
      <LocationPicker onLocationPicked={locationPickedHandler}/>
      <Button onPress={savePlace} >Add place</Button>
    </ScrollView>
    
  )
}

export default PlaceForm

const styles = StyleSheet.create({})