import {TotalCallsType} from '../../dal/callsAPI';


export type ActionsCallsTypes =
    ReturnType<typeof getCalls>


let initialState: TotalCallsType = {
    total_rows: '0',
    results: []
}

const callsReducer = (state: TotalCallsType = initialState, action: ActionsCallsTypes): TotalCallsType => {
    switch (action.type) {
        case 'GET-CALLS':
            console.log('rrr')
            return {
                results: action.data.results,
                total_rows: action.data.total_rows
            }
        default:
            console.log('def')
            return state;
    }
}
export default callsReducer

export const getCalls = (data: TotalCallsType) => ({
        type: 'GET-CALLS', data
    } as const
)

