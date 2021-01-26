import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap');
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
      }

    body {
        max-height: 100vh;
        font-family: 'Roboto', sans-serif;
        background: #F8F8F8;
        -webkit-font-smoothing: antialiased !important;
        overflow-x: hidden;
        -webkit-user-select: none;
         -moz-user-select: -moz-none;
          -ms-user-select: none;
              user-select: none;
      }

      span {
        color: #252525;
      }
`;