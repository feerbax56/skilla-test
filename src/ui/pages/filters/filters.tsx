import React from 'react';
import s from './filters.module.css'
const Filters = () => {
    return (
        <div className={s.filtersBlock}>
            <div>Все типы</div>
            <div>Все сотрудники</div>
            <div>Все звонки</div>
            <div>Все источники</div>
            <div>Все оценки</div>
            <div>Все ошибки</div>
        </div>
    );
};

export default Filters;