import './index.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import CustomIcon from '../customIcon';
import { Button, Input, Space } from 'antd';
import exampleImg from '../../assets/images/burt.png';

const { Search } = Input;

const Header: React.FC = () => {
    /**
     * 搜索方法
     * */
    const onSearch = () => {};

    return (
        <div className="header">
            <CustomIcon className="header-logo" name="talk"/>
            <nav className="header-nav">
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/explore">发现</NavLink>
                <NavLink to="/questions">一起谈</NavLink>
            </nav>
            <Space size="middle" className="header-search">
                <Search style={{ width: 400 }} placeholder="输入标题或关键词搜索" onSearch={onSearch} enterButton/>
                <Button type="primary">提问</Button>
            </Space>
            <div className="header-avatar">
                <img src={exampleImg} alt="user avatar"/>
            </div>
        </div>
    );
};

export default Header;
