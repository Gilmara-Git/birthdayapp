import  { Container, Message, HeartIcon, ImageContainer } from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import  { Loading } from '../../components/Loading';
import photo   from '../../assets/cropped.jpg';
import skill from '../../assets/skill.jpg'
import giltoto from '../../assets/giltoto.jpg';
import EuNenem from '../../assets/euNenem.png';
import junior from '../../assets/junior.png';
import pirata from '../../assets/pirata.png';
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
    const [ isLoaded, setIsLoaded ] = useState(true);
    const theme = useTheme();  

    const handleGoback =()=>{
        navigation.navigate("home")
    }

    useFocusEffect(useCallback(()=>{     
        setIsLoaded(true);
        const timer = setTimeout(()=>{
            setIsLoaded(false);
        }, 100)
      
        return ()=> clearTimeout(timer);
    },[]))
   

    return (
        <Container>
            <Header onBackCommand={handleGoback}/>
            <Message style={{fontSize: 32, color: theme.COLORS.PRIMARY}}>Feliz Aniversário meu amor!!</Message>
            <HeartIcon name="heart" size={16} color="PRIMARY"/>
            <HeartIcon name="heart" size={32} color="SECONDARY"/>
            <HeartIcon name="heart" size={64} color="PRIMARY"/>

            { isLoaded ? <Loading /> :
            <FlatList
            contentContainerStyle={{ marginTop: 50}} 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={photoList}
                keyExtractor={item=>item}
                renderItem={({item})=>(
                    <ImageContainer style={{borderWidth: 1, borderColor: theme.COLORS.PRIMARY}} source={item}/>

                )}
            />
                }
            <Message style={{fontSize: 20, color: theme.COLORS.WHITE}}>March 4th 2023</Message>
                 
        </Container>
    )
}