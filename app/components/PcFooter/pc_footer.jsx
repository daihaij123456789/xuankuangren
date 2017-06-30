import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
                            
                        </h2>
                        <div data-reactid="66">
                            <a target="_blank " href="https://github.com/ant-design/ant-design" data-reactid="67">
                                <span data-reactid="68">
                                    源码仓库
                                </span>
                            </a>
                        </div>
                        <div data-reactid="69">
                            <a target="_blank " href="https://ant.design/docs/react/customize-theme"
                            data-reactid="70">
                                <span data-reactid="71">
                                    定制主题
                                </span>
                            </a>
                        </div>
                        <div data-reactid="72">
                            <a target="_blank " href="https://github.com/websemantics/awesome-ant-design"
                            data-reactid="73">
                                <span data-reactid="74">
                                    Awesome Ant Design
                                </span>
                            </a>
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
                            <a href="https://design.alipay.com/" data-reactid="81">
                                <span data-reactid="82">
                                    蚂蚁金服设计平台
                                </span>
                            </a>
                        </div>
                        <div data-reactid="83">
                            <a href="http://mobile.ant.design" data-reactid="84">
                                Ant Design Mobile
                            </a>
                            <span data-reactid="85">
                                -
                            </span>
                            <span data-reactid="86">
                                移动版
                            </span>
                        </div>
                        <div data-reactid="87">
                            <a href="http://scaffold.ant.design" data-reactid="88">
                                Scaffolds
                            </a>
                            <span data-reactid="89">
                                -
                            </span>
                            <span data-reactid="90">
                                脚手架市场
                            </span>
                        </div>
                        <div data-reactid="91">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva"
                            data-reactid="92">
                                dva
                            </a>
                            
                            <span data-reactid="94">
                                应用框架
                            </span>
                        </div>
                        <div data-reactid="95">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva-cli"
                            data-reactid="96">
                                dva-cli
                            </a>
                            
                            <span data-reactid="98">
                                开发工具
                            </span>
                        </div>
                        <div data-reactid="99">
                            <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/"
                            data-reactid="100">
                                Egg
                            </a>
                            <span data-reactid="101">
                                -
                            </span>
                            <span data-reactid="102">
                                企业级 Node 开发框架
                            </span>
                        </div>
                        <div data-reactid="103">
                            <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/"
                            data-reactid="104">
                                AntV
                            </a>
                            <span data-reactid="105">
                                -
                            </span>
                            <span data-reactid="106">
                                数据可视化
                            </span>
                        </div>
                        <div data-reactid="107">
                            <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design"
                            data-reactid="108">
                                Ant Motion
                            </a>
                            <span data-reactid="109">
                                -
                            </span>
                            <span data-reactid="110">
                                设计动效
                            </span>
                        </div>
                        <div data-reactid="111">
                            <a target="_blank" rel="noopener noreferrer" href="http://library.ant.design/"
                            data-reactid="112">
                                AntD Library
                            </a>
                            <span data-reactid="113">
                                -
                            </span>
                            <span data-reactid="114">
                                Axure 部件库
                            </span>
                        </div>
                        <div data-reactid="115">
                            <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design"
                            data-reactid="116">
                                Ant UX
                            </a>
                            <span data-reactid="117">
                                -
                            </span>
                            <span data-reactid="118">
                                页面逻辑素材
                            </span>
                        </div>
                        <div data-reactid="119">
                            <a target="_blank" rel="noopener noreferrer" href="http://enclose.io/"
                            data-reactid="120">
                                Enclose.IO
                            </a>
                            <span data-reactid="121">
                                -
                            </span>
                            <span data-reactid="122">
                                Node.js 编译器
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
                            <a href="/changelog" data-reactid="129">
                                <span data-reactid="130">
                                    更新记录
                                </span>
                            </a>
                        </div>
                        <div data-reactid="131">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/wiki/FAQ"
                            data-reactid="132">
                                <span data-reactid="133">
                                    常见问题
                                </span>
                            </a>
                        </div>
                        <div data-reactid="134">
                            <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design"
                            data-reactid="135">
                                <span data-reactid="136">
                                    在线讨论 (中文)
                                </span>
                            </a>
                        </div>
                        <div data-reactid="137">
                            <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design-english"
                            data-reactid="138">
                                <span data-reactid="139">
                                    在线讨论 (English)
                                </span>
                            </a>
                        </div>
                        <div data-reactid="140">
                            <a target="_blank" rel="noopener noreferrer" href="http://new-issue.ant.design/"
                            data-reactid="141">
                                <span data-reactid="142">
                                    报告 Bug
                                </span>
                            </a>
                        </div>
                        <div data-reactid="143">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/issues"
                            data-reactid="144">
                                <span data-reactid="145">
                                    讨论列表
                                </span>
                            </a>
                        </div>
                        <div data-reactid="146">
                            <a target="_blank" rel="noopener noreferrer" href="http://stackoverflow.com/questions/tagged/antd"
                            data-reactid="147">
                                <span data-reactid="148">
                                    StackOverflow
                                </span>
                            </a>
                        </div>
                        <div data-reactid="149">
                            <a target="_blank" rel="noopener noreferrer" href="https://segmentfault.com/t/antd"
                            data-reactid="150">
                                <span data-reactid="151">
                                    SegmentFault
                                </span>
                            </a>
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
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/benjycui/bisheng"
                            data-reactid="160">
                                BiSheng
                            </a>
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