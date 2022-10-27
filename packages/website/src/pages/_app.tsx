import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/Store'
import {ConnectionProvider} from "../components/ConnectionProvider";
function MyApp({ Component, pageProps }: AppProps) {
  return (<Provider store={store}>
            <ConnectionProvider>
                <Component {...pageProps} />
            </ConnectionProvider>
          </Provider>)
}

export default MyApp
