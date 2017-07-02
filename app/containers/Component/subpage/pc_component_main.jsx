import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import {Row,Col, Menu, Icon} from 'antd'
import './pc_com_main.less'
const SubMenu = Menu.SubMenu;
class PcComponentMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            current: '1',
            openKeys: [],
          }
    }
    handleClick(e){
        console.log('Clicked: ', e);
        this.setState({ current: e.key });
        }
    onOpenChange(openKeys){
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
          nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
          nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
      }
  getAncestorKeys(key){
        const map = {
          sub3: ['sub2'],
        };
        return map[key] || [];
      }
    render() {
        console.log(111111111)
        return (
            <div className="main-warpper">
            <div className="main-warpper-row">
                <Row >
                    <Col xs={{ span: 24 }}  sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 4 }}>
                        <Menu
                            mode="inline"
                            openKeys={this.state.openKeys}
                            selectedKeys={[this.state.current]}
                            onOpenChange={this.onOpenChange.bind(this)}
                            onClick={this.handleClick.bind(this)}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                              <Menu.Item key="1">Option 1</Menu.Item>
                              <Menu.Item key="2">Option 2</Menu.Item>
                              <Menu.Item key="3">Option 3</Menu.Item>
                              <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                              <Menu.Item key="5">Option 5</Menu.Item>
                              <Menu.Item key="6">Option 6</Menu.Item>
                              <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                              </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                              <Menu.Item key="9">Option 9</Menu.Item>
                              <Menu.Item key="10">Option 10</Menu.Item>
                              <Menu.Item key="11">Option 11</Menu.Item>
                              <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                          </Menu>
                    </Col>
                    <Col xs={{ span: 0 }}  sm={{ span: 0 }} md={{ span: 19 }}  lg={{ span: 20 }} className="main-container">
                        <article className="markdown">
                            <h1>
                                快速上手
                                <a className="edit-button" href="https://github.com/ant-design/ant-design/edit/master/docs/react/getting-started.zh-CN.md">
                                    <i className="anticon anticon-edit">
                                    </i>
                                </a>
                            </h1>
                            <section className="markdown">
                                <p>
                                    Ant Design React 致力于提供给程序员
                                    <strong>
                                        愉悦
                                    </strong>
                                    的开发体验。
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
                    </Col>
                </Row>
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
)(PcComponentMain)