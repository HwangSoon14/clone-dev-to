import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { SocketContext, socket } from './context/socket';
ReactDOM.render(
	<React.Fragment>
		<BrowserRouter>
			<Provider store={store}>
				<SocketContext.Provider value={socket}>
					<App />
				</SocketContext.Provider>
			</Provider>
		</BrowserRouter>
	</React.Fragment>,
	document.getElementById('root'),
);
