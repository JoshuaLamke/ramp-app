import threatReducer from './threatReducer';
import mitigationReducer from './mitigationReducer'
import {combineReducers,createStore} from 'redux';
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const allReducers = combineReducers({
    threatReducer,
    mitigationReducer
})

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig,allReducers)
export const store = createStore(
    persistedReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export const persistor = persistStore(store)
