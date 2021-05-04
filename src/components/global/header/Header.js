import './Header.css'
import React, {useState} from 'react'
import { Menu, Avatar } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

function Header(){
    const [current, setCurrent] = useState('mail')
    const handleClick = (e) => {
        setCurrent(e.key);
    };
    return(
        <header>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
            Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
            Navigation Two
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
            <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
            </Menu.Item>
        </Menu>
        <div className="avitar-wrap">
            <Avatar size="small" icon={<UserOutlined />} />
        </div>
      </header>
    )
}
export default Header