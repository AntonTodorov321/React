import { Component } from 'react';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

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
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
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

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoes: [],
            name: 'Pesho'
        };
    };

    componentDidMount() {
        console.log('componentDidMount');

        fetch('http://localhost:3030/jsonstore/todoes')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    todoes: Object.values(data)
                });
            });
    };

    render() {
        return (
            <>
                <Menu mode="horizontal" items={items} />
            </>
        );
    }
}

export default App
