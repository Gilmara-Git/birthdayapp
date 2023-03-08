import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.SECONDARY};
    justify-content: center;
    align-items: center;
`


export const LoadingIndicator = styled.ActivityIndicator.attrs(({theme})=>({
    color: theme.COLORS.PRIMARY,
        
    }))``