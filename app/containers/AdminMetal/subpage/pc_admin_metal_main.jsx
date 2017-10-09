import React from 'react'
import {Row,Col, Menu, Icon} from 'antd'
import PcMetalInput from './metalInput/pc_metal_input'
import PcMetalList from './metalList/pc_metal_list'

import './pc_admin_metal_main.less'
class PcAdminMetalMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state= {
            current:'userList'
        }
    }
    
    handleClick(e){
        this.setState({ current: e.key });
    }
    render() { 
        switch(this.state.current){
            case'userList':
                var List = <PcMetalInput />;
            break;
            case 'newsList' :
                var List = <PcMetalList />;
            break;
        }
        return (
            <div className="main-warpper">
                <div style={{background:'#fff',marginLeft:'50px',marginRight:'50px'}}>
                <Row >
                    <Col xs={{ span: 24 }}  sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 3}}>
                        <Menu
                            onClick={this.handleClick.bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="inline"
                          >
                            <Menu.Item key="userList">
                              <Icon type="appstore" />金属录入页面
                            </Menu.Item>
                            <Menu.Item key="newsList">
                              <Icon type="appstore" />金属列表页面
                            </Menu.Item>
                          </Menu>
                    </Col>
                    <Col xs={{ span: 0 }}  sm={{ span: 0 }} md={{ span: 19 }}  lg={{ span: 21 }} className="main-container">
                        {List}
                    </Col>
                    </Row>
                </div>
            </div>
        )
    }
}


export default PcAdminMetalMain