import { Provider } from 'react-redux';
import { store } from 'store';
import AlertProvider from 'providers/alertProvider';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AlertProvider>
        <Component {...pageProps} />
      </AlertProvider>
    </Provider>
  )
}

export default MyApp
