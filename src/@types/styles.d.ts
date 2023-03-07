import 'styled-components';
import themes from '../themes';



declare module 'styled-components'{
    type Themetype = typeof themes; 

    export interface DefaultTheme extends Themetype {} 
}