//task: use useMutation to update the database
import { useMutation, useQuery } from "@tanstack/react-query";
import { Location, Place } from "../models/places";
import { fetchAllPlaces, insertPlace } from "../utils/DB";

export const useStorePlace=({onSuccess}:{onSuccess:({id}:{id:string})=>void},{lng,lat}:Location)=>{
    return useMutation(['place',lng,lat],insertPlace,{
        onSuccess:(id)=>{
            const iD=id as any;
            onSuccess({id:iD})},

    })
}

export const useGetAllPlaces=()=>{
    return useQuery(['places'],fetchAllPlaces)
}
