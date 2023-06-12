import {CallFilter, callsAPI, TotalCallsType} from '../../dal/callsAPI';
import {AppThunk} from '../store';
import {AxiosError} from 'axios';

export type ActionsCallsTypes =
    ReturnType<typeof getCalls>


let initialState: TotalCallsType = {
    total_rows: '0',
    results: [],

}

const callsReducer = (state: TotalCallsType = initialState, action: ActionsCallsTypes): TotalCallsType => {
    switch (action.type) {
        case 'GET-CALLS':
            return {
                results: action.data.results,
                total_rows: action.data.total_rows
            }
        default:
            return state;
    }
}
export default callsReducer

export const getCalls = (data: TotalCallsType) =>
    ({type: 'GET-CALLS', data} as const)

export const getCallsPackTC =
    (date_start: string, date_end: string, params?: CallFilter): AppThunk =>
        (dispatch) => {
            callsAPI
                .getCallsList(date_start, date_end, params)
                .then((res) => {
                    dispatch(getCalls(res.data));
                })
                .catch((err: AxiosError<{ error: string }>) => {
                    console.log(err, 'error')
                });
        };


