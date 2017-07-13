import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import {Table, Input, Icon, Button, Popconfirm, message, Form, Modal, Card,InputNumber,Row,Col,Menu,Radio} from 'antd'

const FormItem = Form.Item;
const MenuItem = Menu.Item;
const RadioGroup = Radio.Group;
class PcMetalArtcie extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render() {
        let {getFieldDecorator} = this.props.form;
        const metalObj = this.props.metalObj;
        return(
            <article className="markdown">
                            <h1>
                                {metalObj.title}
                                <a className="edit-button" href="https://github.com/ant-design/ant-design/edit/master/docs/react/getting-started.zh-CN.md">
                                    <i className="anticon anticon-edit">
                                    </i>
                                </a>
                            </h1>
                            <section className="markdown">
                                <p>
                                    Ant Design React 致力于提供给程序员愉悦的开发体验。
                                </p>
                            </section>
                            <section className="toc">
                                <ul>
                                    <li>
                                        <a className="bisheng-toc-h2" href="#第一个例子" title="第一个例子">
                                            第一个例子
                                        </a>
                                    </li>
                                    <li>
                                        <a className="bisheng-toc-h2" href="#标准开发" title="标准开发">
                                            标准开发
                                        </a>
                                    </li>
                                    <li>
                                        <a className="bisheng-toc-h2" href="#兼容性" title="兼容性">
                                            兼容性
                                        </a>
                                    </li>
                                    <li>
                                        <a className="bisheng-toc-h2" href="#自行构建" title="自行构建">
                                            自行构建
                                        </a>
                                    </li>
                                    <li>
                                        <a className="bisheng-toc-h2" href="#按需加载" title="按需加载">
                                            按需加载
                                        </a>
                                    </li>
                                    <li>
                                        <a className="bisheng-toc-h2" href="#配置主题和字体" title="配置主题和字体">
                                            配置主题和字体
                                        </a>
                                    </li>
                                    <li>
                                        <a className="bisheng-toc-h2" href="#小甜点" title="小甜点">
                                            小甜点
                                        </a>
                                    </li>
                                </ul>
                            </section>
                            <section className="markdown">
                            </section>
                            <section className="markdown api-container">
                            </section>
                        </article>
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
)(Form.create({})(PcMetalArtcie))