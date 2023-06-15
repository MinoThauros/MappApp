import { GOOGLE_MAPS_API_KEY } from "react-native-dotenv";
import { Location } from "../../models/places";

export type AddressError = {
    status: string;
    error: string;
}

const getMapPreview= ({lat,lng}:Location)=>{
    const previewUrl=`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
    return previewUrl;
    
    //setting the marker to red and in the middle of the map
}

export default getMapPreview;

//Docs https://developers.google.com/maps/documentation/geocoding/requests-geocoding#ErrorMessages
export const getAddress= async ({lat,lng}:Location):Promise<string | AddressError>=>{
    let address:any
    const resp= await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`)
    const data= await resp.json() as any;
    if(resp.ok){
        if(!data.results){
            throw new Error('Something went wrong');
        }
        address=data.results[0].formatted_address;
        
    }
    return new Promise((resolve,reject)=>{
        if(resp.ok && address){
            resolve(address);
        }
        reject({
            status:data.status,
            error:data.error_message
        })
        
    })

}