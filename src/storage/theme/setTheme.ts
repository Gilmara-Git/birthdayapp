import AsyncStorage from '@react-native-async-storage/async-storage';
import  { THEME_IDENTIFIER }  from '../store.config';

export const setTheme = async(theme: string) => {
    try{
        console.log(theme, 'linha6')
        await AsyncStorage.setItem(THEME_IDENTIFIER, JSON.stringify(theme));
    }catch(error){
        throw error;
    }
}