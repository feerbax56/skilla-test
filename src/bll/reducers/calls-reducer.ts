import {CallsType, TotalCallsType} from "../../dal/callsAPI";
//
//
// export type ActionsCallsTypes =
//     ReturnType<typeof getCalls>
//
//
// let initialState: TotalCallsType = {
//     total_rows: '0',
//     results: []
// }
//
// const callsReducer = (state: TotalCallsType = initialState, action: ActionsCallsTypes): TotalCallsType => {
//     switch (action.type) {
//         case 'GET-CALLS':
//             return {
//                 return {...state,
//                     total_rows: action.
//                     results: action.data}
//             }
//         default:
//             return state;
//     }
// }
// export default callsReducer
//
// export const getCalls = () => {
//     return {
//         type: 'GET-CALLS', users
//     } as const
// }