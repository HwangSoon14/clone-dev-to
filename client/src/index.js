import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import  ReactDOM  from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
    document.getElementById('root'),
);
