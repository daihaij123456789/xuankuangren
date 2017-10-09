import React from 'react'
import {Table, Icon, Button, Popconfirm, message, Form, Modal, Card,InputNumber} from 'antd'

const FormItem = Form.Item;
class PcUserList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.columns = [{
              title: 'ID',
              dataIndex: 'key',
            },{
              title: '用户名',
              dataIndex: 'name',
            }, {
              title: '创建时间',
              dataIndex: 'time',
            }, {
              title: '等级',
              dataIndex: 'rote',
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
            selecteKeys: [],
            data:[],
            modalVisible: false,
            idAction:''
          }
    }
    componentDidMount() {
        // 获取用户信息
        var myFetchOptions = {
            method: 'GET'
            };
           
        fetch("api/admin/users" , myFetchOptions)
        .then(response => response.json())
        .then(json => {
            const dataArr = [];
            json.users.forEach(function(item,index){
                dataArr.push({
                key: item._id,
                name: item.name,
                time: item.meta.createAt,
                rote: item.role
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
        this.setModalVisible(true);
    }
     handleSubmitSignUp(e)
    {
        //页面开始向 API 进行提交数据
        e.preventDefault();
            var formData = this.props.form.getFieldsValue();
            
            var data = new FormData();
            data.append( "json", JSON.stringify(formData));
            var myFetchOptions = {
            method: 'PUT',
            body:data
            };
            
            fetch(`api/admin/users/${this.state.idAction}`, myFetchOptions)
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
        fetch(`api/admin/users/${record.key}`, myFetchOptions)
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
        let {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Table columns={this.columns} dataSource={this.state.data}/>
                <Modal title="修改用户" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
                            <Card type="card">
                                    <Form layout="horizontal" onSubmit={this.handleSubmitSignUp.bind(this)}>
                                        <FormItem label="等级">
                                        {getFieldDecorator('role', {
                                            rules: [{ required: true, message: 'Please input your number !' }],
                                          })(
                                            <InputNumber  placeholder="请输入1到100的数字" min={1} max={100} style={{width:200}}/>
                                        )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">确定修改</Button>
                                    </Form>
                            </Card>
                </Modal>
            </div>
        )
    }
}
export default Form.create({})(PcUserList)