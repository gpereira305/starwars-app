import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
 * {
   list-style: none;
   text-decoration: none;  
   font-weight: normal;  
   margin: 0;
   padding: 0;  
   /* letter-spacing: 1.2px;  */
   /* line-height: 1.2; */
  
 }

 
:root { 
  --white: #fff;
  --black: #000000;
  --dark: #505050;
  --gold: #FFC700;
  --green: #00FF66;
  /* --lg-gray: #D4D4D4; */
  --lg-gray: #CFCFCF; 
  --dk-gray: #A1A1A1;

  --fira: 'Fira Code', monospace;

}

html,
body {  
  box-sizing: border-box;
  overflow-x: hidden;
  scroll-behavior: smooth;
  font-family: var(--fira);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


   .fade-in {
      -webkit-animation: fade-in 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
       animation: fade-in 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }

   @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
    opacity: 1;
     }
   }

   @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
   }
}
`;
