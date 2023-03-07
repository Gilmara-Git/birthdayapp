import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Birthday } from '../screens/Birthday';
import { Cake } from '../screens/Cake';


export const AppRoutes = () =>{

    const { Navigator , Screen}  =  createNativeStackNavigator();
    return (

        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="home" component={Home}/>
            <Screen name="cake" component={Cake}/>
            <Screen name="birthday" component={Birthday}/>            
        </Navigator>

    )
}