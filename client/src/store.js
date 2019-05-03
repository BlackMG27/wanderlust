import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;

// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
// import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// const logger = createLogger({
//     /* https://github.com/evgenyrodionov/redux-logger */
//     collapsed: true,
//     diff: true
// });

// const configureStore = function (initialState) {
//     return createStore(
//         rootReducer,
//         initialState,
//         composeWithDevTools(
//             /* logger must be the last middleware in chain to log actions */
//             applyMiddleware(thunk, logger)
//         )
//     );
// }

// const initialState = {};
// const middleware = [thunk];
// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );
// export default configureStore;