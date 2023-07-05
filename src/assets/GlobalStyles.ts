import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root {
    --red: #FC4747;
    --darkBlue: #10141E;
    --blue: #161D2F;
    --greyblue: #5A698F;
}
body {
    font-family: 'Outfit';
    font-style: normal;
    background-color: var(--darkBlue);
    
}

h1 {
    font-size: 20px;
    font-family: Outfit;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.312px;
    color: white;
    margin: 16px;
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
        font-size:32px;
    }
}

main{
    @media screen and (min-width: 1050px) {
       margin-left: 142px 
    }
}

`;
