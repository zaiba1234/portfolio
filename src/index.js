import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { NavigationProgress } from '@mantine/nprogress';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider theme={{
      fontSizes: {
        xxs: 9, xs: 14, sm: 16, md: 18, lg: 20, xl: 22, xxl: 25, lxl: 28, lxxl: 35
      },

      colors: {
        basic: ["#0000", "#191919", "#37B24D",]
      }
    }} >
      <NavigationProgress />
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
