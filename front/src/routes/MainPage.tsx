import React, { useState } from 'react';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { Breadcrumb, Layout } from 'antd';

import SideMenu from '../components/SideMenu';
const { Header, Content, Footer, Sider } = Layout;

export default function MainPage(){

    const [collapsed, setCollapsed] = useState(false);
    

    return(
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <Button type="primary" onClick={()=>setCollapsed((prev)=>!prev)} style={{ marginBottom: 16 }}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </Header>
            <Layout className="site-layout">
                <Sider collapsible collapsed={collapsed} trigger={null} onCollapse={value => setCollapsed(value)} collapsedWidth="0">
                    <SideMenu/>
                </Sider>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Name of menu</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Contents will be display
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}