import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
class PcHomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const image= this.props.image + " image-wrapper pc_section"
        return (
            <div id={this.props.page} className="content-wrapper page">
                <div className={image}>
                </div>
                <div className="text-wrapper">
                    <h2 className="pc_section">
                        <span>
                            {this.props.title}
                        </span>
                    </h2>
                    <p className="pc_section pc_home_page_p">
                        <span>
                            {this.props.content}
                        </span>
                    </p>
                    <div className="pc_section">
                        <Link to={this.props.link}>
                            <button type="button" className="ant-btn ant-btn-primary ant-btn-lg">
                                <span>
                                    了解更多
                                </span>
                                <i className="anticon anticon-right">
                                </i>
                            </button>
                        </Link>
                    </div>
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
)(PcHomePage)