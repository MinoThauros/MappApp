import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { Colors } from '../../constants/colors'

type ButtonProps={
    onPress:()=>void,
    children:React.ReactNode
}

const Button = ({onPress,children}:ButtonProps) => {
    //composition works well with buttons and other things we can wrap around other things
  return (
    <Pressable onPress={onPress} style={({pressed})=>[styles.button, pressed && styles.pressed]}>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
    
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:12,
        paddingVertical:8,
        margin:4,
        backgroundColor:Colors.primary800,
        elevation:2,
        shadowColor:'black',
        shadowOpacity:0.15,
        shadowOffset:{width:1,height:1},
        shadowRadius:2,
        borderRadius:2
    },
    text:{
        textAlign:'center',
        fontSize:16,
        color:Colors.primary50
    },
    pressed:{
        opacity:0.7
    }
})