import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const dinamicMargin = windowHeight > 750 ? '100px': '0px';


export type IconPropsColorStyle = 'PRIMARY' | 'SECONDARY'; 

type IconProps = {
    size: number;
    color: IconPropsColorStyle;
}


export const Container = styled(SafeAreaView)`
    flex:1;
    background-color: ${({theme})=> theme.LIGHT.COLORS.SECONDARY};
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const Message = styled.Text`
    font-family: ${({theme})=>theme.FONT_FAMILY.DIDACT_GOTHIC_400};
    text-align: center;
    margin-top: ${dinamicMargin};
`



export const HeartIcon = styled(AntDesign).attrs<IconProps>(({size, color, theme })=>({
    color: color === 'PRIMARY' ? theme.LIGHT.COLORS.PRIMARY : theme.LIGHT.COLORS.WHITE,
    size: size
}))`
    margin: 10px 10px;
`;

export const ImageWrapper = styled.View`
border-radius: 10px;
width: 100%;
;

`;
export const ImageContainer = styled.Image`
    height: 200px;
    width: 200px;
    margin-right: 50px;
    border-radius: 120px;
    `
