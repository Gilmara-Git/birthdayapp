import styled, { css } from  'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type themeType = {
    type: string;
}

export const Container = styled(SafeAreaView)`
    flex:1;
    background-color: ${({theme})=> theme.LIGHT.COLORS.SECONDARY};
    justify-content: center;
    align-items: center;
    padding: 20px;
    
`;

export const CakeContainer = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
   
`
export const ButtonText = styled.Text`
    ${({theme})=> css`
    font-family: ${theme.LIGHT.FONT_FAMILY.DIDACT_GOTHIC_400};
    color: ${theme.LIGHT.COLORS.WHITE};
    
    `}
    font-size: 28px;
`

export const CakeButton = styled(MaterialIcons).attrs(({theme})=>({
    size: 200,
    color: theme.LIGHT.COLORS.PRIMARY

}))``;