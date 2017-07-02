import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import './pc_body.less'
class PcHomePageBottom extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="page4" className="content-wrapper page pc_section">
                <div className="text-wrapper-bottom pc_section">
                    <h2 className="">
                        <span>
                            互赢·共享·发展
                        </span>
                    </h2>
                    <p className="">
                        <span>
                            这是一个致力于提升矿业从业体验的交流与咨询网站。
                        </span>
                    </p>
                </div>
                <div className="image4 bottom-wrapper pc_section">
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
)(PcHomePageBottom)