import React, { useState } from 'react';
import './Registered.css';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { Breadcrumb, Layout } from 'antd';

import SideMenu from '../components/SideMenu';
const { Header, Content, Footer, Sider } = Layout;

export default function MainPage() {

    const [collapsed, setCollapsed] = useState(false);


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <div><h1 className="title">Web Page Storage</h1></div>
                <Button type="primary" onClick={() => setCollapsed((prev) => !prev)} style={{ marginBottom: 16 }}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>

            </Header>
            <Layout className="site-layout">
                <Sider collapsible collapsed={collapsed} trigger={null} onCollapse={value => setCollapsed(value)} collapsedWidth="0">
                    <SideMenu />
                </Sider>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Registered Sites</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <table className="table">
                            <th className="name">Name</th> <th>Address</th> <th>Description</th> <th className="pmbutton">+/-</th>
                            <tr> <td></td> <td></td> <td></td> <td><input type='button' value='-' /></td> </tr>
                            <tr> <td></td> <td></td> <td></td> <td><input type='button' value='-' /></td></tr>
                            <tr> <td></td> <td></td> <td></td> <td><input type='button' value='-' /></td></tr>
                            <tr> <td></td> <td></td> <td></td> <td><input type='button' value='-' /></td></tr>
                            <tr> <td></td> <td></td> <td></td> <td><input type='button' value='-' /></td></tr>
                            <tr> <td></td> <td></td> <td></td> <td><input type='button' value='-' /></td></tr>
                            <tr> <td></td> <td></td> <td></td> <td><input type='button' value='-' /></td></tr>
                            <tr> <td></td> <td></td> <td></td> <td><input type='button' value='-' /></td></tr>
                            <tr> <td><input type="text" className="input1" /></td>
                                <td><input type="text" className="input2" /></td>
                                <td><input type="text" className="input3" /></td>
                                <td><input type='button' value='+' /></td></tr>
                        </table>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}