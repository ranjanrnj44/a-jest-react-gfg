import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/featureCounter/CounterSlice';

const store = configureStore({
    reducer : {
        counter: counterReducer,
    },
});

export default store;