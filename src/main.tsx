import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import microApp from '@micro-zoe/micro-app';
import { apps } from './route.ts'
microApp.start({
  preFetchApps: apps?.map(item => ({name: item?.name, url: item?.url, iframe: true})),
  lifeCycles: {
    created() {
      console.log('created');
    },
    beforemount() {
      console.log('beforemount');
    },
    mounted() {
      console.log('mounted');
    },
    unmount() {
      console.log('unmount');
    },
    error() {
      console.log('error');
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
