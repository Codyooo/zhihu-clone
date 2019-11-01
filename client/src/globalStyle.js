import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body{
    background:#F6F6F6;
  }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
      padding:0;
      margin:0;
    }
    
    a {
      text-decoration: none;
      color: #000;
    }
`