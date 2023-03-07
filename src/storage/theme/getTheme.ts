import AsyncStorage from '@react-native-async-storage/async-storage';
import  { THEME_IDENTIFIER }  from '../store.config';

export const getTheme = async()=>{
    try{
        const storage = await AsyncStorage.getItem(THEME_IDENTIFIER);
        const themeType = storage ? JSON.parse(storage) : '';
        return themeType;

    }catch(error){
        throw error;
    }


};

