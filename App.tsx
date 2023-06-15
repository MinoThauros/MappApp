import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import HeaderButton from './components/UI/HeaderAddButton';
import { Colors } from './constants/colors';
import Map from './screens/Map';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:Colors.primary500,
        },
        headerTintColor:Colors.gray700,
        contentStyle:{
          backgroundColor:Colors.gray700,//this is where the background color of the screen is set
        }
      }}>
        <Stack.Screen 
          name="AllPlaces" 
          component={AllPlaces}
          options= {({navigation})=>({
            headerTitle:'All Places',
            headerRight: ({tintColor}) =>
              <HeaderButton 
                size={45} 
                color={tintColor}
                onPress={()=>navigation.navigate('AddPlace')}
                
                />,
          })}
          
          />
        <Stack.Screen 
          name="AddPlace" 
          component={AddPlace} 
          options={{
            title:'Add a New Place',
          }}/>
        
        <Stack.Screen 
          name="Map" 
          component={Map} 
          options={{
            title:'Map',
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221c30',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
