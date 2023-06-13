import {instance} from './instance';


export const callsAPI = {
    getCallsList(date_start: string, date_end: string, params?: CallFilter) {
        return instance.post<TotalCallsType>(`getList?date_start=${date_start}&date_end=${date_end}`, {
            params,
        })
    },
    getRecord(record: string, partnership_id: string){
        return instance.post(`getRecord?record=${record}&partnership_id=${partnership_id}`,
            )

    }

}

export type TotalCallsType = {
    total_rows: string
    results: CallsType[]

}
export type CallsType = {
    id: number;
    partnership_id: string;
    partner_data: {
        id: string;
        name: string;
        phone: string;
    };
    date: string;
    date_notime: string;
    time: number;
    from_number: string;
    from_extension: string;
    to_number: string;
    to_extension: string;
    is_skilla: number;
    status: string;
    record: string;
    line_number: string;
    in_out: number;
    from_site: number;
    source: string;
    errors: any[];
    disconnect_reason: string;
    results: any[];
    stages: any[];
    abuse: any[];
    contact_name: string;
    contact_company: string;
    person_id: number;
    person_name: string;
    person_surname: string;
    person_avatar: string;
}


export type CallFilter = {
    date_start: string; // Format: YYYY-MM-DD
    date_end: string; // Format: YYYY-MM-DD
    in_out?: 0 | 1; // 0 - outgoing call, 1 - incoming call
    limit?: number;
    offset?: number;
    sort_by?: 'date' | 'duration';
    order?: 'ASC' | 'DESC';
    status?: 'success' | 'fail';
    from_type?: ('clients' | 'new_clients' | 'workers' | 'app')[];
    from_persons?: number[];
    sources?: ('from_site' | 'yandex' | 'google' | 'empty')[];
    duration?: {
        gte?: number;
        lte?: number;
    };
    errors?: ('noerrors' | 'noscript')[];
    results?: ('order' | 'message' | 'preorder')[];
    search?: string;
    ids?: number[];
    xls?: 1;
};