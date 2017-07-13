import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import {Table, Input, Icon, Button, Popconfirm, message, Form, Modal, Card,InputNumber,Row,Col,Menu,Radio} from 'antd'

const FormItem = Form.Item;
const MenuItem = Menu.Item;
const RadioGroup = Radio.Group;
class PcNewsInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    handleSubmit(e)
    {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        
            var formData = this.props.form.getFieldsValue();
            if(!formData.title){
                message.success("请输入新闻标题");
                return 
            }
            if(!formData.type){
                message.success("请选择新闻类型");
                return 
            }
            var data = new FormData();
            data.append( "json", JSON.stringify(formData));
            var myFetchOptions = {
                method: 'POST',
                body:data
            };
            
            fetch("api/admin/news" , myFetchOptions)
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
             <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)} className="form-center">
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
                <FormItem label="创建作者"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('author_name', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="请输入创建作者" />
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
                <FormItem label="图片链接"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('thumbnail_pic_s', {
                    rules: [{ required: true, message: 'Please input your Password agein!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="图片链接" />
                )}
                </FormItem>
                <FormItem label="新闻链接"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('url', {
                    rules: [{ required: true, message: 'Please input your Password agein!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="新闻链接" />
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
                      <Radio value="top">头条</Radio>
                      <Radio value="guolei">国内矿业</Radio>
                      <Radio value="guoji">国际矿业</Radio>
                      <Radio value="kyhz">矿业合作</Radio>
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
                <Button type="primary" htmlType="submit" >保存</Button>
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
)(Form.create({})(PcNewsInput))