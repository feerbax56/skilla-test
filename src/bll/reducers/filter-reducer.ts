export type ActionsFilterTypes =
    ReturnType<typeof getDate> |
    ReturnType<typeof changeTypeCall>


export type FiltersType = {
    date_start: string,
    date_end: string
    callType: 'входящий' | 'исходящий' | 'все'
}

let initialState: FiltersType = {
    date_start: '',
    date_end: '',
    callType: 'все'
}

const filtersReducer = (state: FiltersType = initialState, action: ActionsFilterTypes): FiltersType => {
    switch (action.type) {
        case 'GET-DATA' :
            return {
                ...state,
                date_start: action.date_start,
                date_end: action.date_end
            }
        case 'CHANGE-TYPE-CALL':
            return {
                ...state,
                callType: action.callType
            }
        default:
            return state;
    }
}

export default filtersReducer

export const getDate = (date_start: string, date_end: string) =>
    ({type: 'GET-DATA', date_start, date_end} as const)

export const changeTypeCall = (callType: FiltersType['callType']) =>
    ({type: 'CHANGE-TYPE-CALL', callType} as const)