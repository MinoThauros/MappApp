import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Colors } from '../../constants/colors'
import CustomTextInput from '../UI/CustomTextInput'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'
import Button from '../UI/Button'
import { Location } from '../../models/places'

type FullAddress=Location&{address:string}

const PlaceForm = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [location, setLocation] = useState<FullAddress>()
  const savePlace=()=>{
    console.log(title)
    console.log(image)
    console.log(location)

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