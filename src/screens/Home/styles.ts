import styled, { css } from  'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import  { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export const Container = styled(SafeAreaView)`
    flex:1;
    background-color: ${({theme})=> theme.LIGHT.COLORS.SECONDARY};
    justify-content: center;
    align-items: center;
    padding: 20px;
    
`;

export const ThemeContainer = styled(TouchableOpacity)`
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        
`
export const ThemeIcon  = styled(MaterialCommunityIcons).attrs(({theme})=>({
    size: 24,    
    color: theme.LIGHT.COLORS.WHITE
}))``

export const CakeContainer = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
    flex: 1
   
`
export const ButtonText = styled.Text`
    ${({theme})=> css`
    font-family: ${theme.LIGHT.FONT_FAMILY.DIDACT_GOTHIC_400};
    color: ${theme.LIGHT.COLORS.WHITE};
    
    `}
    font-size: 28px;
`

export const GiftButton = styled(AntDesign).attrs(({theme})=>({
    size: 200,
    color: theme.LIGHT.COLORS.PRIMARY

}))``;