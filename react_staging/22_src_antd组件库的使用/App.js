import React, { Component } from 'react'
import { Button, DatePicker} from 'antd';
import {WechatOutlined,DownOutlined,WarningTwoTone,SearchOutlined} from '@ant-design/icons'

export default class App extends Component {
    render() {
        function onChange(date, dateString) {
            console.log(date, dateString);
        }

        const { RangePicker } = DatePicker;
        
        return (
            <div>
                <button>点我...</button>
                <Button type="primary">Primary Button</Button>
                <Button>无type</Button>
                <Button type="ghost">ghost</Button>
                <Button type="link">link</Button>
                <WechatOutlined />
                <DownOutlined />
                <WarningTwoTone />
                <Button type="primary" icon={<SearchOutlined />}>                
                    Search
                </Button>
                <br/>
                <DatePicker onChange={onChange} />
                <br/>
                <RangePicker />
            </div>
        )
    }
}

