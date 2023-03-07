import { Container, NavButton, ButtonContainer } from './styles';
import {TouchableOpacityProps}  from 'react-native';

  type HeaderProps = TouchableOpacityProps & {
    onBackCommand: ()=>void;
  };

export const Header =({ onBackCommand, ...rest}: HeaderProps)=>{
    return (
        <Container>
            <ButtonContainer onPress={onBackCommand}>
                <NavButton name="left" />               
            </ButtonContainer>
        </Container>
    )
}
