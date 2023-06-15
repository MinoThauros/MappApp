import { PermissionResponse} from 'expo-modules-core';
import { Alert, Platform } from "react-native";

type LocationPermissionResponse = {
    status: 'UNDETERMINED' | 'DENIED' | 'GRANTED';
    // Add other fields if needed
  };
  
  type RequestPermission = () => Promise<LocationPermissionResponse>;
  
  type PermissionStatus = {
    UNDETERMINED: string;
    DENIED: string;
    // Add other fields if needed
  };
  
  type VerifyPermissionsProps = {
    //improve this typing
    permissionState: { 
        permission: any; 
        requestPermission: any 
    };
    PermissionStatus: PermissionStatus;
  };

const verifyPermissions=async ({
    permissionState: { permission, requestPermission },
    PermissionStatus,
  }: VerifyPermissionsProps)=>{
    if(permission && permission.status===PermissionStatus.UNDETERMINED){
        const permissionResp=await requestPermission();
        return permissionResp.granted;
    }
    if(permission && permission.status===PermissionStatus.DENIED){
        
        Alert.alert('Permission Denied','You need to grant camera permissions to use this app',[{text:'Okay'}])
        return false
    }
    return true//we do have access to camera
}

export default verifyPermissions;