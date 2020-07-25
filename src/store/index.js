import { createStore } from 'redux';
import calculation from './reducers/calculation/index.js'

const store = createStore(calculation);

export default store;