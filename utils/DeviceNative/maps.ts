import { GOOGLE_MAPS_API_KEY } from "react-native-dotenv";
import { Location } from "../../models/places";

const getMapPreview= ({lat,lng}:Location)=>{
    const previewUrl=`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
    return previewUrl;
    
    //setting the marker to red and in the middle of the map
}

export default getMapPreview;