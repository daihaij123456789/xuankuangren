import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import {Row,Col, Menu, Icon,message,Form,Input,Button} from 'antd'
import PcMetalInput from './metalInput/pc_metal_input'
import PcMetalList from './metalList/pc_metal_list'
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;

import './pc_admin_metal_main.less'
//const SubMenu = Menu.SubMenu;
class PcAdminMetalMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            current:'userList'
        }
    }
    
  componentDidMount() {
        // 获取商户信息
        
    }
    /*handleSubmit(e)
    {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        
            var formData = this.props.form.getFieldsValue();
            
            var data = new FormData();
            data.append( "json", JSON.stringify(formData));
            var myFetchOptions = {
            method: 'POST',
            body:data
            };
            
            fetch("api/introduce/admin/news" , myFetchOptions)
            .then(response => response.json())
            .then(json => {
                console.log(json.data)
            });
            
        
    };*/
    handleClick(e){
        this.setState({ current: e.key });
    }
    render() { 
        let {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
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
)(Form.create({})(PcAdminMetalMain))