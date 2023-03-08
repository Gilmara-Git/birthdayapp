import { StatusBar } from "react-native";

import {
  useFonts,
  DidactGothic_400Regular,
} from '@expo-google-fonts/didact-gothic';

import { ThemeProvider } from 'styled-components/native';
import themes from './src/themes';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({ DidactGothic_400Regular });

   return (
    <ThemeProvider theme={themes}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
      {!fontsLoaded ? <Loading /> : <Routes/>}
    </ThemeProvider>
  );
}