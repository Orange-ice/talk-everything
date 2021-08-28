import './index.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import CustomIcon from '../customIcon';

const Header: React.FC = () => {
    return (
        <div className="header">
            <CustomIcon className="header-logo" name="talk"/>
            <nav className="header-nav">
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/explore">发现</NavLink>
                <NavLink to="/questions">一起谈</NavLink>
            </nav>
        </div>
    );
};

export default Header;
