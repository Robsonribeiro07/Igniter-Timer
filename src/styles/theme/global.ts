import { createGlobalStyle,} from 'styled-components'




export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}
#root {
    height: 100vh;
}


:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props)=> props.theme['green-300']};
}

body {
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme['gray-600']};
    color: white;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;

}
html, body , input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem
    
}


`