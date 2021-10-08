import { configureStore } from '@reduxjs/toolkit'
import { createStore} from 'redux';
import { reducer } from './utils/reducers';

export const store = createStore(reducer);

export default store;