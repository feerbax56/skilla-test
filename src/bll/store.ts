import {applyMiddleware, combineReducers, createStore} from 'redux';
import callsReducer, {ActionsCallsTypes} from './reducers/calls-reducer';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const rootReducer = combineReducers({
    calls: callsReducer,
});
export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    RootActionsType
>;

type RootActionsType = ActionsCallsTypes
type ThunkAppDispatchType = ThunkDispatch<AppRootStateType, any, RootActionsType>;
export const useAppDispatch = () => useDispatch<ThunkAppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type RootState = ReturnType<typeof rootReducer>;
export default store;

// @ts-ignore
window.store = store;


