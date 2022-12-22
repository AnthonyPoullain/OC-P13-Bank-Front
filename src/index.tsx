import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<App />
	</Provider>
);