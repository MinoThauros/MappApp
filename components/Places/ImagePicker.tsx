import { StyleSheet, Text, View, Alert, Image } from 'react-native'
import React, { useState } from 'react';
import {launchCameraAsync, useCameraPermissions,PermissionStatus, ImagePickerResult} from 'expo-image-picker';
import { Colors } from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

const ImagePicker = () => {
    const [cameraPermisisonInfo,requestPermission]=useCameraPermissions();
    const [image,setImage]=useState<ImagePickerResult|undefined>()

    const verifyPermissions=async ()=>{
        console.log('Permission',cameraPermisisonInfo?.status)
        if(cameraPermisisonInfo && cameraPermisisonInfo.status===PermissionStatus.UNDETERMINED){
            const permissionResp=await requestPermission();
            return permissionResp.granted;
        }
        if(cameraPermisisonInfo && cameraPermisisonInfo.status===PermissionStatus.DENIED){
            
            Alert.alert('Permission Denied','You need to grant camera permissions to use this app',[{text:'Okay'}])
            return false
        }
        return true//we do have access to camera
    }

    const pickImage = async () => {
        const hasPermission=await verifyPermissions()
        if(!hasPermission){
            return
        }
        console.log('we got permission')
        const image=await launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5,
            
        })
        setImage(image)
    }

    let imagePreview=<Text>No image picked yet.</Text>
    if(image&& image.assets){
        imagePreview=<Image style={styles.image} source={{uri:image.assets[0].uri}}/>
    }
  return (
    <View>
        <View style={styles.imagePreview}>
            {imagePreview}
        </View>
      <OutlinedButton onPress={pickImage} icon="camera">Take Image</OutlinedButton>
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
    imagePreview:{
        width:'100%',
        height:200,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary100,
        borderRadius:4,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    }
})