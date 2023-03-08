import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const Container = styled(SafeAreaView)`  
    flex-direction: row;
    width: 100%;
    background-color: ${({theme})=> theme.LIGHT.COLORS.SECONDARY};  
    align-items: center;  
    justify-content: space-between;
    
   
`;

export const ButtonContainer = styled(TouchableOpacity)`
 flex-direction: row;
 width: 100%;

`

export const  NavButton =  styled(AntDesign).attrs(({theme})=>({
    color: theme.LIGHT.COLORS.WHITE,
    size: 20
}))``;