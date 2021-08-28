import './index.scss';
import React from 'react';
import { joinClass } from '../../utils';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const CustomIcon: React.FunctionComponent<IconProps> = ({ name, className, ...reset }) => {
    return (
        <svg className={joinClass('custom-icon', className)} {...reset}>
            <use xlinkHref={`#icon-${name}`}/>
        </svg>
    );
};

export default CustomIcon;
