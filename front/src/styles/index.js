import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.min.css";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    html, body, #root {
      width: 100%;
      min-width: 100%;
      height: 100%;
      min-height: 100%;
      margin: 0;
      background: #ffffff !important;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      font-family: sans-serif;
    }


    #root {
      width: 100%;
      min-width: 100%;
      height: 100%;
      min-height: 100%;
      
    }

`;

export default GlobalStyle;
