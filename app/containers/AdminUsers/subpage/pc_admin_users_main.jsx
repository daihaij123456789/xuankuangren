import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import {Table, Input, Icon, Button, Popconfirm, message, Form, Modal, Card,InputNumber,Row,Col,Menu} from 'antd'
import PcUserList from './UserList/pc_user_list'

import './pc_admin_users_main.less'

const FormItem = Form.Item;
const MenuItem = Menu.Item;
class PcAdminUsersMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            current:'userList'
          }
    }
    
   componentDidMount() {
    }
    
    handleClick(e){
        this.setState({ current: e.key });
    }
    render() { 
        let {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        
        switch(this.state.current){
            case'userList':
                var List = <PcUserList />
            break;
            case 'newsList' :
                var List = <div>12</div>;
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
                              <Icon type="appstore" />用户列表页面
                            </Menu.Item>
                            <Menu.Item key="newsList">
                              <Icon type="appstore" />新闻列表页面
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

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create({})(PcAdminUsersMain))