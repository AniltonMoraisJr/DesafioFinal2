import { createStore, compose, applyMiddleware } from "redux";
// import createSagaMiddleware from 'redux-saga';
// import sagas from './sagas';

/* Reducers */
import combineReducers from "./ducks";

// const middlewares = [];

// const sagaMiddleware = createSagaMiddleware();

// middlewares.push(sagaMiddleware);

// const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createStore(combineReducers, compose());

// sagaMiddleware.run(sagas);

export default store;
