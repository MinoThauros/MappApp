import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react';
import {Place, PlaceProp } from '../../models/places';
import PlaceItem from '../PlaceItem';

type PlacesListProps={
    places:PlaceProp[]
}
const PlacesList = ({places}:PlacesListProps) => {
    //handle failed API requests using react query

    if(!places){
        return (
            <View style={styles.fallBackContainer}>
                <Text style={styles.fallBackText}>No places added yet - start adding some</Text>
            </View>
        )
    }

    const onSelectPlace=(id:string)=>{
        console.log(id);
    }
    return (
    <View>
        <FlatList
        data={places}
        keyExtractor={(item)=>item.id}
        renderItem={({item,index})=> <PlaceItem place={item}/>}//data in flatlist are encapsulated in item
        />
    </View>
    )
}

export default PlacesList

const styles = StyleSheet.create({
    fallBackText:{
        fontSize:20,
    },
    fallBackContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})