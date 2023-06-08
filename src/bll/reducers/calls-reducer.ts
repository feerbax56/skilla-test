import {CallsType, TotalCallsType} from '../../dal/callsAPI';


export type ActionsCallsTypes =
    ReturnType<typeof getCalls>


let initialState: TotalCallsType = {
    total_rows: '0',
    results: []
}

const callsReducer = (state: TotalCallsType = initialState, action: ActionsCallsTypes): TotalCallsType => {
    switch (action.type) {
        case 'GET-CALLS':
            return {
                ...state,
                results: action.results
            }
        default:
            return state;
    }
}
export default callsReducer

export const getCalls = (results: CallsType[]) => {
    return {
        type: 'GET-CALLS', results
    } as const
}