import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './components/redux/store/store';
import App from './App';
import './index.css';

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App className='CommonStyle'/>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
