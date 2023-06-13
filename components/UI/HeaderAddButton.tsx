import { View, StyleSheet,Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { useContext } from "react";

const HeaderButton=({size,color,onPress}:any):JSX.Element=>{


    const pressed=()=>{
        //overlay.toogleOverlay();
    }

    return(
        <Pressable style={({pressed})=>(pressed ? styles.pressed:null)} onPress={onPress}>
              <View style={styles.container}>
        <View style={styles.iconTainer}>
            <Ionicons name="add-circle" size={size} color={color} style={{        
                shadowColor:'black',
                shadowOpacity:0.26,
                shadowOffset:{width:0,height:2},}}/>
        </View>
        
    </View>  
        </Pressable>
)
};

const styles = StyleSheet.create({
    container: {
    },

    iconTainer:{
        flex:1,

    },
    pressed:{
        opacity:0.5
    },
  });

export default HeaderButton;
