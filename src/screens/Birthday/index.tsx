import  { Container, Message, HeartIcon, ImageContainer } from './styles';
import photo   from '../../assets/cropped.jpg';
import EuNenem from '../../assets/euNenem.png';
import giltoto from '../../assets/giltoto.jpg';
import junior from '../../assets/junior.png';
import pirata from '../../assets/pirata.png';
import skill from '../../assets/skill.jpg'
import toto from '../../assets/toto.png';
import totoCarinhoJoyce from '../../assets/totoCarinhoJoyce.png';
import totoOlhar from '../../assets/TotoOlharJoyce.png';
import totoTouca from '../../assets/totoTouca.png';
import buque from '../../assets/buque.png';
import casamento1  from '../../assets/casamento1.png';
import casamento2  from '../../assets/casamento2.png';
import casamento3  from '../../assets/casamento3.png';
import { useTheme } from 'styled-components/native';
import { Header } from '../../components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProps } from '../Home';
import { useState } from 'react';
import { FlatList } from 'react-native';

type BirthdayNavProps ={
    navigation: NativeStackNavigationProp<RouteProps, "birthday">
}

export const Birthday =({navigation}: BirthdayNavProps)=>{
    const [ photoList, setPhotoList] =  useState([ photo, EuNenem, giltoto, junior, pirata, skill, totoTouca, totoOlhar, totoCarinhoJoyce, toto, buque, casamento1, casamento2, casamento3 ])
    const [ loading, setLoading ] = useState(true);
    const theme = useTheme();  

    const handleGoback =()=>{
        navigation.navigate("home")
    }

    return (
        <Container>
            <Header onBackCommand={handleGoback}/>
            <Message style={{fontSize: 32, color: theme.LIGHT.COLORS.PRIMARY}}>Feliz Aniversário meu amor!!</Message>
            <HeartIcon name="heart" size={16} color="PRIMARY"/>
            <HeartIcon name="heart" size={32} color="SECONDARY"/>
            <HeartIcon name="heart" size={64} color="PRIMARY"/>

            <FlatList
            contentContainerStyle={{ marginTop: 50}} 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={photoList}
                keyExtractor={item=>item}
                renderItem={({item})=>(
                    <ImageContainer style={{borderWidth: 1, borderColor: theme.LIGHT.COLORS.PRIMARY}} source={item}/>

                )}
            />
            <Message style={{fontSize: 20, color: theme.LIGHT.COLORS.WHITE}}>March 4th 2023</Message>
                 
        </Container>
    )
}