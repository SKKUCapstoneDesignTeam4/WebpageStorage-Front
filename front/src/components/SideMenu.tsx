import type { MenuProps } from 'antd';
import { Menu } from 'antd';

import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      children,
      label,
      type,
    } as MenuItem;
  }

const items: MenuItem[] = [
    getItem('Main', '1'),
    getItem('New Pages', '2'),
    getItem('Stored Pages', '3'),
    getItem('Registered Sites', '4'),
    getItem('Setting', '5'),
];

export function SideMenu(){
    return(
        <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
                items={items}
            />
    );
}

export default SideMenu;