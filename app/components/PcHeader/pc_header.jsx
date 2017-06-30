import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Row,Col, Menu, Icon} from 'antd'
import {Router, Route, Link, browserHistory} from 'react-router'
import './pc_header.less'
class PcHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            current:this.props.type
        }
    }
    handleClick(e) {
            this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <header id="header" className="header-panle clearfix">
                <Row >
                    <Col xs={{ span: 24 }}  sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 4 }}>
                        <Link id="logo" to="/">
                        <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
                        <span>Ant Design</span>
                        </Link>
                    </Col>
                    <Col xs={{ span: 0 }}  sm={{ span: 0 }} md={{ span: 19 }}  lg={{ span: 20 }}>
                        <Menu
                            onClick={this.handleClick.bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            id="nav"
                        >
                            <Menu.Item key="home">
                            <Link to="/"><Icon type="bars" /><span>首页</span></Link>
                            </Menu.Item>
                            <Menu.Item key="introduce">
                            <Link to="/introduce"><Icon type="solution" /><span>指导</span></Link>
                            </Menu.Item>
                            <Menu.Item key="component">
                            <Link to="/component"><Icon type="api" /><span>组件</span></Link>
                            </Menu.Item>
                            <Menu.Item key="pattern">
                            <Link to="/pattern"><Icon type="fork" /><span>模式</span></Link>
                            </Menu.Item>
                            <Menu.Item key="resourec">
                            <Link to="/resourec"><Icon type="switcher" /><span>资源</span></Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </header>
            
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
)(PcHeader)