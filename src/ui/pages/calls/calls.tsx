import React, {useEffect} from 'react';
import {callsAPI} from "../../../dal/callsAPI";



useEffect(()=>{
    callsAPI.getCallsList('2023-01-01','2023-05-30')
},[])


const Calls = () => {
    return (
        <div>
            <div>шапка</div>
            <div>данные с апишки</div>
        </div>
    );
};

export default Calls;