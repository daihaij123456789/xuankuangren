import React from 'react'
import { connect } from 'react-redux'
import {Row,Col, Menu, Icon} from 'antd'
import PcCaseInput from './caseInput/pc_case_input'
import PcCaseList from './caseList/pc_case_list'

import './pc_admin_case_main.less'
class PcAdminCaseMain extends React.Component {
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
                var List = <PcCaseInput />;
            break;
            case 'newsList' :
                var List = <PcCaseList />;
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
                              <Icon type="appstore" />案例录入页面
                            </Menu.Item>
                            <Menu.Item key="newsList">
                              <Icon type="appstore" />案例列表页面
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
export default PcAdminCaseMain