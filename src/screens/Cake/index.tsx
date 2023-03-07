import { Container, CakeContainer, ButtonText, CakeButton } from './styles';
import { NativeStackNavigationProp } from  '@react-navigation/native-stack';

export type RouteProps = {
    home: undefined; 
    birthday: undefined;
}

type HomeNavProps = {
    navigation: NativeStackNavigationProp<RouteProps, 'home'>
}


export const Cake =({navigation}: HomeNavProps)=>{
    const showBdayMessage = ()=>{
        navigation.navigate('birthday');

    }
    return (
        <Container>
            <CakeContainer onPress={showBdayMessage}>
                <CakeButton name="cake"/>
                <ButtonText>Toque no bolo</ButtonText>
            </CakeContainer>
        </Container>
    )
}