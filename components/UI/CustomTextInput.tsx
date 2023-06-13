import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'

type CustomTextInputProps={
    defaultValue?:string,
    styles?:any,
    title?:string,
    nextValue: React.Dispatch<React.SetStateAction<string>> | ((prevState: any) => void) ,
    validationErr? :  JSX.Element,
    //pass the form submission 
}

/**
 * Custom text input component which takes in a validator and a title
 * and displays a warning message over text input if the validator returns false
 * on the entered data upon submission
 * @param {defaultValue} defaultValue
 * 
 * 
 */
const CustomTextInput = ({
    defaultValue, 
    nextValue,
    validationErr,
    title}:CustomTextInputProps) => {

    return (
        <View style={styles.overallView}>
            {title && <Text style={styles.titles}>{title} </Text>}
                {validationErr}
                <TextInput 
                style={styles.textInputA}
                onChangeText={nextValue}//
                defaultValue={defaultValue}/>
        </View>
    )
}

export default CustomTextInput

const styles=StyleSheet.create({
    overallView:{
        marginHorizontal:10,
        //alignItems:'flex-start',
        flexDirection:'column',
        
    },
    overallContainer:{
        backgroundColor:"#521e87",
        borderRadius:18,
        padding:10,
        margin:20,
        width:'75%',
        justifyContent:'center'
    },

    textInputA:{
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor:Colors.primary100,
        borderRadius:8
    },
    titles:{
        fontWeight:'bold',
        color:Colors.primary100
    },
    validationError:{
        fontSize:12,
        color:'red'

    }})