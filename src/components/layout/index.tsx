import './index.scss';
import React from 'react';
import Header from '../header';
import Sider from '../sider';

const Layout: React.FC = (props) => {
    return (
        <div className="layout">
            <Header/>
            <div className="layout-main">
                <div className="layout-main-content">{props.children}</div>
                <Sider/>
            </div>
        </div>
    );
};
export default Layout;
