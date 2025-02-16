import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';

const {ToastContainer} = createStandaloneToast()

const store = createStore(reducers,applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
      <Provider store={store}>
        <HelmetProvider>
          <App />
          <Analytics />
        </HelmetProvider>
        {/* <ToastContainer /> */}
      </Provider>
    {/* </ChakraProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
