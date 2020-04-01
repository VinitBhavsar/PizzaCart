import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Cart from './Components/Cart';
import Heading from './Components/Heading';
import Pizza from './Components/Pizza';

function reducer(state = [], action) {
  debugger
  switch (action.type) {
    case 'PRODUCTS':
      return state.filter(data => data.productName !== action.data.productName)
        .filter(data => data.productCounter > 0)
        .concat([action.data]);
    case 'REMOVE_TOPPING':
      return state.map((topping) => {
        if (topping.productId === action.data.productId) {
          if (topping.productCounter > 1) {
            return {
              ...topping,
              productId: action.data.productId,
              productCounter: action.data.productCounter,
              productName: action.data.productName,
              productImg: action.data.productImg,
            }
          }
          else {
            return {
              productId: action.data.productId,
              productCounter: action.data.productCounter,
              productName: action.data.productName,
              productImg: action.data.productImg,
            }
          }
        }
        else {
          return topping
        }
      })
    case 'RESET_CART':
      return state.filter(data => data.productId === action.id);
    default:
      return state
  }
}


const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Heading />
      <Provider store={store}>
        <Cart />
        <Pizza />
      </Provider>
    </div>
  );
}

export default App;
