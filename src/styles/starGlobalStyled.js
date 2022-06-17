import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
 * {
   list-style: none;
   text-decoration: none;  
   font-weight: normal;  
   margin: 0;
   padding: 0;   
  
 }

 
:root { 
  --white: #fff;
  --black: #000000;
  --dark: #505050;
  --gold: #FFC700;
  --green:#00FF66; 
  --lg-gray: #CFCFCF; 
  --lg-gray2: #c5c5c5; 
  --dk-gray: #A1A1A1;

  --fira: 'Fira Code', monospace;

}

html,
body {  
  box-sizing: border-box;
  overflow-x: hidden; 
  font-family: var(--fira); 


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
