import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './Reducer';
import App from './App'
import './index.css'


// const saveToLocalStorage =(state) => {
//   try{
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('state' , serializedState)
//   } catch (e) {
//     console.log(e)
//   }
// }
//
// const loadFromLocalStorage =() => {
//   try{
//       const serializedState = localStorage.getItem('state');
//       if(serializedState === null) return undefined
//       return JSON.parse(serializedState)
//   } catch (e) {
//       return undefined
//   }
// }
//
//
// const persistedState = loadFromLocalStorage();

const enhancer =  compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(rootReducer,enhancer)


// store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(<Provider store={store}><App />
                </Provider>, document.getElementById('root'))
