import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal,
    Row,
    Col
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
import {Router, Route, Link, browserHistory} from 'react-router'
import './pc_header.less'

function hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class PcHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            current:this.props.type,
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        
        }
    }
    componentWillMount(){
        this.props.form.validateFields();
        if (localStorage.userid!='') {
            this.setState({hasLogined:true});
            this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
        }
    };

    setModalVisible(value)
    {
        this.setState({modalVisible: value});
    };
    handleClick(e) {
        if (e.key == "register") {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            {
                this.setState({current: e.key});
            }
        }
    };
    handleSubmit(e)
    {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        /*this.props.form.validateFields((err, values) => {
          if (!err) {*/
            var myFetchOptions = {
            method: 'GET'
            };
            var formData = this.props.form.getFieldsValue();
            console.log(formData);
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            + "&username="+formData.userName+"&password="+formData.password
            +"&r_userName=" + formData.r_userName + "&r_password="
            + formData.r_password + "&r_confirmPassword="
            + formData.r_confirmPassword, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({userNickName: json.NickUserName || '', userid: json.UserId || ''});
                localStorage.userid= json.UserId;
                localStorage.userNickName = json.NickUserName;
            });
            if (this.state.action=="login") {
                this.setState({hasLogined:true});
            }
            message.success("请求成功！");
            this.setModalVisible(false);
          /*}
        });*/
        
    };
    callback(key) {
        if (key == 1) {
            this.setState({action: 'login'});
        } else if (key == 2) {
            this.setState({action: 'register'});
        }
    };
    logout(){
        localStorage.userid= '';
        localStorage.userNickName = '';
        this.setState({hasLogined:false});
    };
    render() {
        let {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" class="register">
                    <Link target="_blank" to={`/usercenter`}>
                        <Button type="ghost" htmlType="button">欢迎您{this.state.userNickName}</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
                </Menu.Item>
            : <Menu.Item key="register" class="register">
                <Icon type="appstore"/>注册/登录
            </Menu.Item>;
        return (
            <header id="header" className="header-panle clearfix">
                <Row >
                    <Col xs={{ span: 24 }}  sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 4 }}>
                        <Link id="logo" to="/">
                        <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
                        <span>华南选矿冶金技术网</span>
                        </Link>
                    </Col>
                    <Col xs={{ span: 0 }}  sm={{ span: 0 }} md={{ span: 19 }}  lg={{ span: 20 }}>
                        <Menu
                            onClick={this.handleClick.bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            id="nav"
                        >
                            <Menu.Item key="home">
                            <Link to="/"><Icon type="bars" /><span>首页</span></Link>
                            </Menu.Item>
                            <Menu.Item key="introduce">
                            <Link to="/introduce"><Icon type="solution" /><span>选矿前沿</span></Link>
                            </Menu.Item>
                            <Menu.Item key="component">
                            <Link to="/component"><Icon type="api" /><span>技术交流</span></Link>
                            </Menu.Item>
                            <Menu.Item key="pattern">
                            <Link to="/pattern"><Icon type="fork" /><span>项目案例</span></Link>
                            </Menu.Item>
                            <Menu.Item key="resourec">
                            <Link to="/resourec"><Icon type="switcher" /><span>资源共享</span></Link>
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
                            <Tabs type="card" onChange={this.callback.bind(this)}>
                                <TabPane tab="登录" key="1">
                                    <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>

                                        <FormItem label="账户"
                                            validateStatus={userNameError ? 'error' : ''}
                                            help={userNameError || ''}
                                        >
                                        {getFieldDecorator('userName', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                          })(
                                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入您的账号" />
                                        )}
                                        </FormItem>
                                        <FormItem label="密码"
                                            validateStatus={passwordError ? 'error' : ''}
                                            help={passwordError || ''}
                                        >
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                          })(
                                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入您的密码" />
                                        )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>登录</Button>
                                    </Form>
                                </TabPane>
                                <TabPane tab="注册" key="2">
                                    <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                        {getFieldDecorator('r_userName', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                          })(
                                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入您的账号" />
                                        )}
                                        </FormItem>
                                        <FormItem label="密码">
                                        {getFieldDecorator('r_password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                          })(
                                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入您的密码" />
                                        )}
                                        </FormItem>
                                        <FormItem label="确认密码">
                                        {getFieldDecorator('r_confirmPassword', {
                                            rules: [{ required: true, message: 'Please input your Password agein!' }],
                                          })(
                                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请再次输入您的密码" />
                                        )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                </Row>
            </header>
            
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
)(Form.create({})(PcHeader))