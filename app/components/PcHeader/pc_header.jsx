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
            userid: 0,
            adminShow:false,
            rote:'',
            setAdminStyle:0
        
        }
    }
    componentWillMount(){
        if (localStorage.userid!='') {
            this.setState({hasLogined:true});
            
            this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid,rote:localStorage.rote});
            console.log(localStorage.role)
            if(localStorage.rote>10){
                this.setState({adminShow:true});
                this.setState({setAdminStyle:50})
            }
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
    handleSubmitSignIn(e){
        e.preventDefault();
        var formData = this.props.form.getFieldsValue();
        var data = new FormData();
        data.append( "json", JSON.stringify(formData));
        var myFetchOptions = {
            method: 'POST',
            body:data
            };
            
            fetch("api/user/signin" , myFetchOptions)
            .then(response => response.json())
            .then(json => {
                if(json.data == '0'){
                    message.success("用户名不存在,请注册!!!");
                    return 
                }
                if(json.data == '1'){
                    message.success("用户名与密码不相符,请重新输入!!!");
                    return 
                }
                this.setState({hasLogined:true});
                this.setState({userNickName: json.data.name || '', userid: json.data._id || '',role:json.data.rote || ''});
                
                
                localStorage.userid = json.data._id;
                localStorage.userNickName = json.data.name;
                localStorage.rote = String(json.data.role);

                if(json.data.role>10){
                    this.setState({adminShow:true});
                    this.setState({setAdminStyle:50})
                }
                message.success("登陆成功!!!");
                this.setModalVisible(false);
            });
            
    }
    handleSubmitSignUp(e)
    {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        /*this.props.form.validateFields((err, values) => {
          if (!err) {*/
            var formData = this.props.form.getFieldsValue();
            if(formData.r_password!==formData.r_confirmPassword){
                message.success("再次输入密码不相同，请重新输入!!!");
                return 
            }
            var data = new FormData();
            data.append( "json", JSON.stringify(formData));
            var myFetchOptions = {
            method: 'POST',
            body:data
            };
            
            fetch("api/user/signup" , myFetchOptions)
            .then(response => response.json())
            .then(json => {
                if(json.data == '0'){
                message.success("用户账号已经存在，请更改用户账号!!!");
                return 
                }
                this.setState({hasLogined:true});
                this.setState({userNickName: json.data.name || '', userid: json.data._id || ''});
                localStorage.userid= json.data._id;
                localStorage.userNickName = json.data.name;
                
                message.success("注册成功!!!");
                this.setModalVisible(false);
            });
            
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
        localStorage.rote = ''
        this.setState({hasLogined:false});
        this.setState({adminShow:false});
        this.setState({setAdminStyle:0});
    };
    render() {
        let setAdminStyle =  {
            marginBottom:this.state.setAdminStyle
        }
        let {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const adminPaineShow = this.state.adminShow
            ?<div style={{height:50}}>
                <Link to="/adminNews"><span style={{marginRight:50}}>新闻管理页面</span></Link>
                <Link to="/adminUsers"><span style={{marginRight:50}}>用户管理页面</span></Link>
                <Link to="/adminMetals"><span style={{marginRight:50}}>金属管理页面</span></Link>
                <Link to="/adminCases"><span style={{marginRight:50}}>案例管理页面</span></Link>
            </div>
            :<div></div>
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" class="register">
                    {/**/}
                        <Button type="ghost" htmlType="button"><Link target="_blank" to={`/usercenter`}>欢迎您{this.state.userNickName}</Link></Button>
                    {/**/}
                    &nbsp;&nbsp;
                    <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
                </Menu.Item>
            : <Menu.Item key="register" class="register">
                <Icon type="appstore"/>注册/登录
            </Menu.Item>;
        return (
            <header id="header" className="header-panle clearfix" style={setAdminStyle}>
                <div>
                    <Row >
                        <Col xs={{ span: 24 }}  sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 4 }}>
                            <Link id="logo" to="/">
                            <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
                            <span>华南选矿冶金技术网</span>
                            </Link>
                        </Col>
                        <Col xs={{ span: 0 }}  sm={{ span: 0 }} md={{ span: 19 }}  lg={{ span: 16 }}>
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
                                
                            </Menu>
                            <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
                                <Tabs type="card" onChange={this.callback.bind(this)}>
                                    <TabPane tab="登录" key="1">
                                        <Form layout="horizontal" onSubmit={this.handleSubmitSignIn.bind(this)}>

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
                                        <Form layout="horizontal" onSubmit={this.handleSubmitSignUp.bind(this)}>
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
                        <Col xs={{ span: 0 }}  sm={{ span: 0 }} md={{ span: 0 }}  lg={{ span: 4 }}>
                        <Menu
                                onClick={this.handleClick.bind(this)}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                                id="nav"
                            >
                            {userShow}
                        </Menu>
                        </Col>
                    </Row>
                </div>
                {adminPaineShow}
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