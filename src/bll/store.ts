import {combineReducers, createStore} from 'redux';
import callsReducer from './reducers/calls-reducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

const rootReducer = combineReducers({
    calls: callsReducer,
});
export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
export default store;



