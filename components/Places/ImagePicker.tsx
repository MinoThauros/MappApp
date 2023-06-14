import { StyleSheet, Text, View, Alert, Image } from 'react-native'
import React, { useState } from 'react';
import {launchCameraAsync, useCameraPermissions,PermissionStatus, ImagePickerResult} from 'expo-image-picker';
import { Colors } from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';
import verifyPermissions from '../../utils/DeviceNative/PermissionsManager';

type ImagePickerProps={
    onImagePicked:(imageUri:string)=>void
}

const ImagePicker = ({onImagePicked}:ImagePickerProps) => {
    const [cameraPermisisonInfo,requestPermission]=useCameraPermissions();
    const [image,setImage]=useState<ImagePickerResult|undefined>()

    const checkPermissions=async ()=>{
        console.log('Permission',cameraPermisisonInfo?.status)
        return await verifyPermissions({
            permissionState:{
                permission:cameraPermisisonInfo,
                requestPermission
            },
            PermissionStatus
        })
    }

    const pickImage = async () => {
        const hasPermission=await checkPermissions()
        if(!hasPermission){
            return
        }
        console.log('we got permission')
        const image=await launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5,
            
        })
        if (image) {
            setImage(image);
            onImagePicked(image.assets ? image.assets[0].uri : '');
        }
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