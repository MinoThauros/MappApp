import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/colors'
import CustomTextInput from '../UI/CustomTextInput'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'

const PlaceForm = () => {
  const [title, setTitle] = useState('')

  return (
    <ScrollView style={{margin:'5%'}}>
      <View style={{flex:1}}>
        <CustomTextInput title='Title' nextValue={setTitle}/>
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
    
  )
}

export default PlaceForm

const styles = StyleSheet.create({})