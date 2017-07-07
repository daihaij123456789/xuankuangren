import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import {Row,Col, Menu, Icon,message,
    Form,
    Input,Button} from 'antd'
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
//import { getInfoData } from '../../../fetch/detail/detai'
import './pc_admin_news_main.less'
//const SubMenu = Menu.SubMenu;
class PcAdminNewsMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            
          }
    }
    
  componentDidMount() {
        // 获取商户信息
        
    }
    handleSubmit(e)
    {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        /*this.props.form.validateFields((err, values) => {
          if (!err) {*/
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
            
          /*}
        });*/
        
    };
    render() { 
        let {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        return (
            <div className="main-warpper">
                <div style={{background:'#fff',marginLeft:'50px',marginRight:'50px'}}>
                    <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem label="标题">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                          })(
                          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}  placeholder="请输入标题" />
                        )}
                        </FormItem>
                        <FormItem label="创建日期">
                        {getFieldDecorator('date', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="请输入创建日期" />
                        )}
                        </FormItem>
                        <FormItem label="小图">
                        {getFieldDecorator('thumbnail_pic_s', {
                            rules: [{ required: true, message: 'Please input your Password agein!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="小图" />
                        )}
                        </FormItem>
                        <FormItem label="url">
                        {getFieldDecorator('url', {
                            rules: [{ required: true, message: 'Please input your Password agein!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="url" />
                        )}
                        </FormItem>
                        <FormItem label="类型">
                        {getFieldDecorator('type', {
                            rules: [{ required: true, message: 'Please input your Password agein!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="类型" />
                        )}
                        </FormItem>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </Form>
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
)(Form.create({})(PcAdminNewsMain))