import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

type OutlinedButtonProps={
    onPress:()=>void,
    icon:any,//improve this typing
    children:React.ReactNode
}

const OutlinedButton = ({onPress,icon,children}:OutlinedButtonProps) => {
  return (
    <Pressable 
        style={({pressed})=>[
            styles.button,
            pressed && styles.pressed]} //what is this syntax?: style expects an array of key value pairs
        onPress={onPress}>
        <Ionicons style={styles.icon} name={icon} color={Colors.primary500}/>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default OutlinedButton

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:12,
        paddingVertical:6,
        margin:4,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:Colors.primary500,
        flexDirection:'row',
    },
    pressed:{
        opacity:0.5
    },
    icon:{
        marginRight:6
    },
    text:{
        color:Colors.primary500
    }
})