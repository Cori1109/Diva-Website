import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/Store'
import {ConnectionProvider} from "../components/ConnectionProvider";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

import { Fonts } from "../Fonts/Fonts";
import { theme } from './theme';

const GlobalStyle = () => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
            background-color: #000000;
          }
        `}
      />
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ConnectionProvider>
        <ChakraProvider theme={theme}>
          <GlobalStyle />
          <Fonts />
          <Component {...pageProps} />
        </ChakraProvider>
      </ConnectionProvider>
    </Provider>
  );
};

export default App;
