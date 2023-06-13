import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react';
import {launchCameraAsync, useCameraPermissions,PermissionStatus} from 'expo-image-picker';

const ImagePicker = () => {
    const [cameraPermisisonInfo,requestPermission]=useCameraPermissions();

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
        console.log('image is',image)
    }
  return (
    <View>
      <Button onPress={pickImage} title="Pick an image from camera roll" />
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({})