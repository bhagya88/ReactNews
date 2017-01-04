import React from 'react';
import ReactDOM from 'react-dom';
import ArticleComponent from './components/ArticleComponent';

import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import thunk from 'redux-thunk';



// const defaultState = {
// 	articles : [
// 	{title:"title1",content:"content1",link:"link1",notes:["note11","note12"]},
// 	{title:"title2",content:"content2",link:"link2",notes:["note21","note22"]},
// 	{title:"title3",content:"content3",link:"link3",notes:["note31","note32"]}
// 	],

// 	current: 0
// };

const store = createStore(rootReducer,// defaultState);
	composeWithDevTools(applyMiddleware(thunk))
	);

ReactDOM.render(
 <BrowserRouter>
  <Provider store={store} >
  	<ArticleComponent />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
