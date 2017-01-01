import React from 'react';
import ReactDOM from 'react-dom';
import Article from './components/Article';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import  rootReducer from './reducers/rootReducer';


const defaultState = {
	articles : [
	{title:"title1",content:"content1",link:"link1",notes:["note11","note12"]},
	{title:"title2",content:"content2",link:"link2",notes:["note21","note22"]},
	{title:"title3",content:"content3",link:"link3",notes:["note31","note32"]}
	],

	current: 0
};
const store = createStore(rootReducer,defaultState);
	// composeWithDevTools(applyMiddleware(thunk))
	// );

ReactDOM.render(
  <Provider store={store} >
  	<Article />
  </Provider>,
  document.getElementById('root')
);
