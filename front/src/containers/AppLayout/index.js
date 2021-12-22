import { React, useState } from 'react';
import { getAllCategories } from '../../reducer/actions';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export default function AppLayout({children}) {
  const [ collapsed, setCollapsed ] = useState(false);
  const dispatch = useDispatch();
  const onCollapse = close => {
    setCollapsed(close);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
       <Header className="site-layout-background" style={{ padding: 0 }} >
         HELL(O)
       </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <NavLink to='/'> Actions </NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
              <NavLink to='/products'> Products </NavLink>
              </Menu.Item>
              <NavLink to='/categories'>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Categories">
                  <Menu.Item key="3">electronics</Menu.Item>
                  <Menu.Item key="4">jewelery</Menu.Item>
                  <Menu.Item key="5">men's clothing</Menu.Item>
                  <Menu.Item key="7">women's clothing</Menu.Item>
                </SubMenu>
              </NavLink>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Store
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
{/* CONTENT */}
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Layout>
  )
}


