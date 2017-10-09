import React from 'react'
import {Input, Icon, Button, Popconfirm, message, Form,Row,Col,Radio} from 'antd'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class PcMetalInput extends React.Component {
    constructor(props, context) {
        super(props, context);
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
            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)} className="form-center">
                <FormItem label="矿石名称"
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
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}  placeholder="请输入元素名" />
                )}
                </FormItem>
                <FormItem label="标题"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('title1', {
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
                <FormItem label="参考文献"
                    labelCol={{ span: 6 }}
                     wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('reference', {
                    rules: [{ required: true, message: 'Please input your Password agein!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="参考文献" />
                )}
                </FormItem>
                <FormItem label="创建作者"
                    labelCol={{ span: 6 }}
                     wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('author_name', {
                    rules: [{ required: true, message: 'Please input your Password agein!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="创建作者" />
                )}
                </FormItem>
                <FormItem label="矿石类型"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                {getFieldDecorator('type', {
                    rules: [{ required: true, message: 'Please input your Password agein!' }],
                  })(
                   <RadioGroup >
                      <Radio value="有色金属">有色金属</Radio>
                      <Radio value="稀有金属">稀有金属</Radio>
                      <Radio value="黑色金属">黑色金属</Radio>
                      <Radio value="贵金属">贵金属</Radio>
                      <Radio value="耐火材料">耐火材料</Radio>
                      <Radio value="陶瓷材料">陶瓷材料</Radio>
                      <Radio value="工业助剂">工业助剂</Radio>
                      <Radio value="化工材料">化工材料</Radio>
                      <Radio value="机电工业">机电工业</Radio>
                      <Radio value="建筑材料">建筑材料</Radio>
                      <Radio value="固态矿产">固态矿产</Radio>
                      <Radio value="液态矿产">液态矿产</Radio>
                      <Radio value="气态矿产">气态矿产</Radio>
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
export default Form.create({})(PcMetalInput)