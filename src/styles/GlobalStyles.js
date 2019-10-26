import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
    *,
    *:after,
    *:before {
        box-sizing:border-box;
    };
    html {
        font-size: 62.5%;
    }
    a{
        color: inherit;
        text-decoration:none;
    }
`;
