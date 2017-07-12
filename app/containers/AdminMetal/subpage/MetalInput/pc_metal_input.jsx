import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import {Table, Input, Icon, Button, Popconfirm, message, Form, Modal, Card,InputNumber,Row,Col,Menu,Radio} from 'antd'

const FormItem = Form.Item;
const MenuItem = Menu.Item;
const RadioGroup = Radio.Group;
class PcMetalInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    handleSubmit(e)
    {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        
            var formData = this.props.form.getFieldsValue();
            if(!formData.name){
                message.success("请输入金属名称");
                return 
            }
            if(!formData.type){
                message.success("请选择金属类型");
                return 
            }
            var data = new FormData();
            data.append( "json", JSON.stringify(formData));
            var myFetchOptions = {
                method: 'POST',
                body:data
            };
            
            fetch("api/admin/metal" , myFetchOptions)
            .then(response => response.json())
            .then(json => {
                if(String(json.data) == '1'){
                    message.success("保存成功");
                }
            });
            
        
    };
    render() {
        let {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        return(
             <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="名称"
                    labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}  placeholder="请输入金属名称" />
                )}
                </FormItem>
                <FormItem label="元素名"
                    labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                {getFieldDecorator('metalname', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}  placeholder="请输入金属名称" />
                )}
                </FormItem>
                <FormItem label="标题"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}  placeholder="请输入标题" />
                )}
                </FormItem>
                <FormItem label="摘要"
                    labelCol={{ span: 6 }}
                     wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('abstract', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="请输入摘要" type="textarea"/>
                )}
                </FormItem>
                <FormItem label="小图"
                    labelCol={{ span: 6 }}
                     wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('thumbnail_pic_s', {
                    rules: [{ required: true, message: 'Please input your Password agein!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="小图" />
                )}
                </FormItem>
                <FormItem label="参考文献"
                    labelCol={{ span: 6 }}
                     wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('reference', {
                    rules: [{ required: true, message: 'Please input your Password agein!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="小图" />
                )}
                </FormItem>
                <FormItem label="author_name"
                    labelCol={{ span: 6 }}
                     wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('author_name', {
                    rules: [{ required: true, message: 'Please input your Password agein!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="文章来源" />
                )}
                </FormItem>
                <FormItem label="类型"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('type', {
                    rules: [{ required: true, message: 'Please input your Password agein!' }],
                  })(
                   <RadioGroup >
                      <Radio value="ysjs">有色金属</Radio>
                      <Radio value="xyjs">稀有金属</Radio>
                      <Radio value="hsjs">黑色金属</Radio>
                      <Radio value="fjs">非金属</Radio>
                  </RadioGroup>
                )}
                </FormItem>
                <FormItem label="内容"
                    labelCol={{ span: 6 }}
                     wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('content', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="请输入内容" type="textarea"/>
                )}
                </FormItem>
                <Button type="primary" htmlType="submit">保存</Button>
            </Form>
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
)(Form.create({})(PcMetalInput))