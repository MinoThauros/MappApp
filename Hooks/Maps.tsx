import { useQuery } from '@tanstack/react-query'
import { Location } from '../models/places'
import { getAddress } from '../utils/GoogleMaps/maps';

export const useGetAddress=({lat,lng}:{lat?:number,lng?:number},onSuccess:(result:string)=>void)=>{
    return useQuery({
        queryKey:['getAddress'],
        queryFn:async ()=>{
            if(lat && lng){
                return await getAddress({lat,lng})//how to pass variable to queryFn
            }},
        onSuccess,
        enabled:false
    })
}