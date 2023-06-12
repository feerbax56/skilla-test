export type ActionsFilterTypes =
    ReturnType<typeof getDate>

export type FiltersType = {
    date_start: string,
    date_end: string
}

let initialState: FiltersType = {
    date_start: '',
    date_end: '',
}

const filtersReducer = (state: FiltersType = initialState, action: ActionsFilterTypes): FiltersType => {
    switch (action.type) {
        case 'GET-DATA' :
            return {
                date_start: action.date_start,
                date_end: action.date_end
            }
        default:
            return state;
    }
}

export default filtersReducer

export const getDate = (date_start: string, date_end: string) =>
    ({type: 'GET-DATA', date_start, date_end} as const)