import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
class PcFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <footer id="footer" data-reactid="60">
                <ul data-reactid="61">
                    <li data-reactid="62">
                        <h2 data-reactid="63">
                            <i className="anticon anticon-github" data-reactid="64">
                            </i>
                            <span data-reactid="65">
                                关于我们
                            </span>    
                        </h2>
                        <div data-reactid="66">
                            <Link  to="https://github.com/ant-design/ant-design" data-reactid="67">
                                <span data-reactid="68">
                                    关于我们
                                </span>
                            </Link>
                        </div>
                        <div data-reactid="69">
                            <Link  to="https://ant.design/docs/react/customize-theme" data-reactid="70">
                                <span data-reactid="71">
                                    定制主题
                                </span>
                            </Link>
                        </div>
                        <div data-reactid="72">
                            <Link  to="https://github.com/websemantics/awesome-ant-design" data-reactid="73">
                                <span data-reactid="74">
                                    Awesome Ant Design
                                </span>
                            </Link>
                        </div>
                    </li>
                    <li data-reactid="75">
                        <h2 data-reactid="76">
                            <i className="anticon anticon-link" data-reactid="77">
                            </i>
                            <span data-reactid="79">
                                相关站点
                            </span>
                        </h2>
                        <div data-reactid="80">
                            <Link to="https://design.alipay.com/" data-reactid="81">
                                <span data-reactid="82">
                                    蚂蚁金服设计平台
                                </span>
                            </Link>
                        </div>
                        <div data-reactid="83">
                            <Link to="http://mobile.ant.design" data-reactid="84">
                                Ant Design Mobile
                            </Link>
                            <span data-reactid="85">
                                -
                            </span>
                            <span data-reactid="86">
                                移动版
                            </span>
                        </div>
                    </li>
                    <li data-reactid="123">
                        <h2 data-reactid="124">
                            <i className="anticon anticon-customer-service" data-reactid="125">
                            </i>
                        
                            <span data-reactid="127">
                                社区
                            </span>
                        </h2>
                        <div data-reactid="128">
                            <Link to="/changelog" data-reactid="129">
                                <span data-reactid="130">
                                    更新记录
                                </span>
                            </Link>
                        </div>
                        <div data-reactid="131">
                            <Link target="_blank" rel="noopener noreferrer" to="https://github.com/ant-design/ant-design/wiki/FAQ" data-reactid="132">
                                <span data-reactid="133">
                                    常见问题
                                </span>
                            </Link>
                        </div>
                    </li>
                    <li data-reactid="152">
                        <h2 data-reactid="153">
                            
                            Copyright ©2017
                            
                        </h2>
                        <div data-reactid="156">
                            <span data-reactid="157">
                                蚂蚁金服体验技术部出品 @ AFUX
                            </span>
                        </div>
                        <div data-reactid="158">
                            Built with 
                            <Link target="_blank" rel="noopener noreferrer" to="https://github.com/benjycui/bisheng" data-reactid="160">
                                BiSheng
                            </Link>
                        </div>
                    </li>
                </ul>
            </footer>
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
)(PcFooter)