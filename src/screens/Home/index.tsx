import { Container, CakeContainer, ButtonText, GiftButton, ThemeContainer, ThemeIcon } from './styles';
import { NativeStackNavigationProp } from  '@react-navigation/native-stack';
import { useState } from 'react';
import  {Alert } from 'react-native';
import  {getTheme } from '../../storage/theme/getTheme';
import { setTheme } from '../../storage/theme/setTheme';
 
export type RouteProps = {
    home: undefined; 
    birthday: undefined;
    cake: undefined;
}

type HomeNavProps = {
    navigation: NativeStackNavigationProp<RouteProps, 'home'>
}


export const Home =({navigation}: HomeNavProps)=>{
    const [themeType, setThemeType] = useState('dark');
    const showBdayMessage = ()=>{
        navigation.navigate('cake');
    }

    const handleThemeChange = async ()=>{
        console.log('Fiu clicado');
        setThemeType(prevState => prevState === 'light' ? 'dark': 'light')
        try{

            await setTheme(themeType)

            const storedTheme  = await getTheme();
            console.log(storedTheme, 'linha33')

        }catch(error){
            Alert.alert(`${error}, It was not possible to get theme`)
        }
        
    }


    return (   
     
        <Container>
            <ThemeContainer onPress={handleThemeChange}>
                <ThemeIcon name="theme-light-dark"/>
            </ThemeContainer>
            <CakeContainer onPress={showBdayMessage}>
                <GiftButton name="gift"/>
                <ButtonText>Abra</ButtonText>
            </CakeContainer>
        </Container>
   
    )
}