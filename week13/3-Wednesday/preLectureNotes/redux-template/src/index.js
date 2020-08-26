import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './Counter';
import CounterHook from './components/CounterHook'
import reducer from './reducers/reducer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())// creating store inside of redux

ReactDOM.render(
  
  <Provider store={store}>

    <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Counter}/>
        <Route path='/hooks' component={CounterHook}/>
      </Switch>
      </BaseLayout>
    </BrowserRouter>
    
  </Provider>
  ,
  document.getElementById('root')
);


