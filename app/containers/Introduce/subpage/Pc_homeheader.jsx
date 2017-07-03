import React from 'react';
import {Row, Col} from 'antd';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
import PcSearchInput from '../../../components/SearchInput/pc_index';
import PcHomeHeaderMenu from '../../../components/HomeHeaderMenu/pc_headerMenu';
import './style.less'
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class PcHomeHeader extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		};
    }

	

	setModalVisible(value)
	{
		this.setState({modalVisible: value});
	};
	handleSubmit(e)
	{
		//页面开始向 API 进行提交数据
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formData = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
		+ "&username="+formData.userName+"&password="+formData.password
		+"&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
		+ formData.r_confirmPassword, myFetchOptions)
		.then(response => response.json())
		.then(json => {
			this.setState({userNickName: json.NickUserName, userid: json.UserId});
			localStorage.userid= json.UserId;
			localStorage.userNickName = json.NickUserName;
		});
		if (this.state.action=="login") {
			this.setState({hasLogined:true});
		}
		message.success("请求成功！");
		this.setModalVisible(false);
	};
	callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};
	handleClick(e) {
		var key = e.key; 
    	this.props.getHeaderKey(key)
		if (key == "register") {
			this.setState({current: 'register'});
			this.setModalVisible(true);
		} else {
			{
				this.setState({current: e.key});
			}
		}
	};
	setModalVisible(value)
	{
		this.setState({modalVisible: value});
	};
	logout(){
		localStorage.userid= '';
		localStorage.userNickName = '';
		this.setState({hasLogined:false});
	};
	enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    };

	render() {
		let {getFieldProps} = this.props.form;
		return (
			<header>
				<Row>
					<Col span={2}></Col>
					
					<Col span={16}>
						<PcHomeHeaderMenu handleClick={this.handleClick.bind(this)} logout={this.logout.bind(this)} userNickName={this.state.userNickName} hasLogined={this.state.hasLogined} current={this.state.current}/>
						<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
							<Tabs type="card" onChange={this.callback.bind(this)}>
								<TabPane tab="登录" key="1">
									<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="账户">
											<Input placeholder="请输入您的账号" {...getFieldProps('userName')}/>
										</FormItem>
										<FormItem label="密码">
											<Input type="password" placeholder="请输入您的密码" {...getFieldProps('password')}/>
										</FormItem>
										<Button type="primary" htmlType="submit">登录</Button>
									</Form>
								</TabPane>
								<TabPane tab="注册" key="2">
									<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="账户">
											<Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
										</FormItem>
										<FormItem label="密码">
											<Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
										</FormItem>
										<FormItem label="确认密码">
											<Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')}/>
										</FormItem>
										<Button type="primary" htmlType="submit">注册</Button>
									</Form>
								</TabPane>
							</Tabs>
						</Modal>
					</Col>
					<Col span={6}>
		                <div className="home-header-middle">
		                    <div className="search-container">
		                        <i className="icon-search"></i>
		                        &nbsp;
		                        <PcSearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
		                    </div>
		                </div>
					</Col>
				</Row>
			</header>
		);
	};
}
export default PcHomeHeader = Form.create({})(PcHomeHeader);
