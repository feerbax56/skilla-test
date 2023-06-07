import React, {useMemo} from 'react';
import s from './item.module.css';

type PropsType = {
    listItem: MenuType[];
};
type MenuType = {
    id: number;
    icon: React.ReactNode;
    text: string;
};
const Item = ({listItem}: PropsType) => {
    const renderItem = useMemo(() => {
        return listItem.map((item) => {
            return (
                <div key={item.id} className={`${s.itemBlock} ${item.id === 4 && s.itemActive}`}>
                    <div className={s.itemIcon}>{item.icon}</div>
                    <div className={s.itemText}>{item.text}</div>
                    {item.id === 4 && <div className={s.activeCircle}></div>}
                </div>
            );
        });
    }, [listItem]);
    return <div>{renderItem}</div>;
};

export default Item;