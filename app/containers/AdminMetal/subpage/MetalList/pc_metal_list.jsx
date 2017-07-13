import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import {Table, Input, Icon, Button, Popconfirm, message, Form, Modal, Card, InputNumber, Row, Col, Menu, Radio} from 'antd'

const FormItem = Form.Item;
const MenuItem = Menu.Item;
const RadioGroup = Radio.Group;
class PcMetalList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.columns = [{
              title: 'ID',
              dataIndex: 'key',
            },{
              title: '金属名称',
              dataIndex: 'name',
            }, {
              title: '创建时间',
              dataIndex: 'time',
            }, {
              title: '分类',
              dataIndex: 'type',
            },{
              title: '操作', dataIndex: 'action', 
              render: (text, record, index) => {
                    return (
                      this.state.data.length > 0 ?
                      (
                       <div>
                          <span style={{marginRight:10}}>
                          <a onClick={() => this.onModify(record)}>修改</a>
                          </span>
                          <span>
                            <Popconfirm title="是否删除该用户?" onConfirm={() => this.onDelete(record)}>
                              <a href="#">删除</a>
                            </Popconfirm>
                          </span>
                        </div>
                      ) : null
                    );
                  }
            }
        ];
        this.state= {
            selectedRowKeys: [],
            data:[],
            modalVisible: false,
            idAction:'',
            metalObj:''
          }
    }
    componentDidMount() {
        // 获取用户信息
        var myFetchOptions = {
            method: 'GET'
            };
           
        fetch("api/admin/metallist" , myFetchOptions)
        .then(response => response.json())
        .then(json => {
            const dataArr = [];
            json.metal.forEach(function(item,index){
                dataArr.push({
                key: item._id,
                name: item.name,
                time: item.meta.createAt,
                type: item.type
              });
            })
            this.setState({data:dataArr});
        });

    }
    setModalVisible(value)
    {
        this.setState({modalVisible: value});
    };

    onModify(record){
        this.setState({idAction:record.key});
        var myFetchOptions = {
            method: 'GET'
            };
            fetch(`api/admin/metal/${record.key}`, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({metalObj:json.metal});
                this.setModalVisible(true);        
            });
        
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
            method: 'PUT',
            body:data
            };
            
            fetch(`api/admin/metal/${this.state.idAction}`, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                if(String(json.data) == '1'){
                    this.setModalVisible(false);
                    this.componentDidMount();
                    message.success("修改成功!!!");
                    this.setState({idAction:''})
                }         
            });
            this.setState({idAction:''})  
    };
   onDelete(record){
    const data = [...this.state.data];
    var myFetchOptions = {
            method: 'DELETE'
            };  
        fetch(`api/admin/metal/${record.key}`, myFetchOptions)
        .then(response => response.json())
        .then(json => {
            if(String(json.data) == '1'){
                message.success("删除成功!!!");
                this.componentDidMount();
            }else if(String(json.data) == '0'){
                message.success("删除失败!!!");
            }
        });
    
    }
    render() {
        let {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        return (
            <div>
                <Table columns={this.columns} dataSource={this.state.data}/>
                <Modal title="修改用户" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
                            <Card type="card">
                                <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                    <FormItem label="名称">
                                    {getFieldDecorator('name', {
                                        initialValue: this.state.metalObj.name || '',
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                      })(
                                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}  placeholder="请输入金属名称"/>
                                    )}
                                    </FormItem>
                                    <FormItem label="元素名">
                                    {getFieldDecorator('metalname', {
                                        initialValue: this.state.metalObj.metalname || '',
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                      })(
                                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}  placeholder="请输入金属名称" />
                                    )}
                                    </FormItem>
                                    <FormItem label="标题">
                                    {getFieldDecorator('title', {
                                        initialValue: this.state.metalObj.title || '',
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                      })(
                                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}  placeholder="请输入标题" />
                                    )}
                                    </FormItem>
                                    <FormItem label="摘要">
                                    {getFieldDecorator('abstract', {
                                        initialValue: this.state.metalObj.abstract || '',
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                      })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="请输入摘要" type="textarea"/>
                                    )}
                                    </FormItem>
                                    <FormItem label="小图">
                                    {getFieldDecorator('thumbnail_pic_s', {
                                        initialValue: this.state.metalObj.thumbnail_pic_s || '',
                                        rules: [{ required: true, message: 'Please input your Password agein!' }],
                                      })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="小图" />
                                    )}
                                    </FormItem>
                                    <FormItem label="参考文献">
                                    {getFieldDecorator('reference', {
                                        initialValue: this.state.metalObj.reference || '',
                                        rules: [{ required: true, message: 'Please input your Password agein!' }],
                                      })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="小图" />
                                    )}
                                    </FormItem>
                                    <FormItem label="author_name">
                                    {getFieldDecorator('author_name', {
                                        initialValue: this.state.metalObj.author_name || '',
                                        rules: [{ required: true, message: 'Please input your Password agein!' }],
                                      })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="文章来源" />
                                    )}
                                    </FormItem>
                                    <FormItem label="类型">
                                    {getFieldDecorator('type', {
                                        initialValue: this.state.metalObj.type || '',
                                        rules: [{ required: true, message: 'Please input your Password agein!' }],
                                      })(
                                       <RadioGroup >
                                          <Radio value="有色金属">有色金属</Radio>
                                          <Radio value="稀有金属">稀有金属</Radio>
                                          <Radio value="黑色金属">黑色金属</Radio>
                                          <Radio value="非金属">非金属</Radio>
                                      </RadioGroup>
                                    )}
                                    </FormItem>
                                    <FormItem label="内容">
                                    {getFieldDecorator('content', {
                                        initialValue: this.state.metalObj.content || '',
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                      })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="请输入内容" type="textarea"/>
                                    )}
                                    </FormItem>
                                    <Button type="primary" htmlType="submit">保存</Button>
                                </Form>
                            </Card>
                </Modal>
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
)(Form.create({})(PcMetalList))