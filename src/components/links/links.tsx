
import { LinkItem } from '@/types/types';
import React from 'react';

const Links: React.FC<{ data: LinkItem[], classNames: string }> = ({ data, classNames }) => {
    return (<ul className={classNames}>
        {data.map((item, index) => (
            <li key={index}>
                <a href={item.link}>{item.label}</a>
            </li>
        ))}
    </ul>)
}

export default Links