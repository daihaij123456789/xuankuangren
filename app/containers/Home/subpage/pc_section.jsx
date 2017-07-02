import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import './pc_body.less'
class PcSection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="page banner-wrapper">
                <div className="page" id="banner">
                    <div className="banner-text-wrapper">
                        <h2 className="pc_section_h2">
                            <p>
                                华南选矿冶金技术网
                            </p>
                        </h2>
                        <p className="pc_section_p">
                            <span>
                                一个专业的选矿冶金技术交流网站
                            </span>
                        </p>
                        <span className="line pc_section" >
                        </span>
                        <div className="start-button clearfix pc_section">
                            <Link to="/introduce">
                                <span>
                                    关于我们
                                </span>
                            </Link>
                            <Link to="/pattern">
                                <span>
                                    项目案例
                                </span>
                            </Link>
                        </div>
                        <span className="github-btn pc_section">
                            <Link className="gh-btn" to="//github.com/ant-design/ant-design/" target="_blank">
                                <span className="gh-ico" aria-hidden="true">
                                </span>
                                <span className="gh-text">
                                    数据分数
                                </span>
                            </Link>
                            <Link className="gh-count" target="_blank" to="//github.com/ant-design/ant-design/stargazers/">
                                14885
                            </Link>
                        </span>
                    </div>
                    <i className="anticon anticon-down down">
                    </i>
                </div>
            </section>
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
)(PcSection)