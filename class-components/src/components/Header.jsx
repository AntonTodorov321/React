import { Component } from "react";

import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import TodoContext from "../context/TodoContext";

export default class Header extends Component {
    render() {
        const items = [
            {
                label: 'Navigation One',
                key: 'mail',
                icon: <MailOutlined />,
            },
            {
                label: 'Navigation Two',
                key: 'app',
                icon: <AppstoreOutlined />,
                disabled: true,
            },
            {
                key: 'alipay',
                label: (
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                ),
            },
        ];
        return (
            <TodoContext.Consumer>
                {({ name }) => {
                    <>
                        <h3>{name}</h3>
                        <Menu mode="horizontal" items={items} />
                    </>
                }}
            </TodoContext.Consumer>
        );
    };
};