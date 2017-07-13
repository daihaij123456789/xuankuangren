import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Row,Col, Menu, Icon} from 'antd'
import {Router, Route, Link, browserHistory} from 'react-router'
import PcHeader from '../../components/PcHeader/pc_header'
import PcFooter from '../../components/PcFooter/pc_footer'
import PcAdminCaseMain from './subpage/pc_admin_case_main'

class PcAdminCases extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        
    }
    render() {
        return (
            <div id="react-content">
                <div className="page-wrapper">
                    <PcHeader/>
                    <PcAdminCaseMain />
                    <PcFooter/>
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
)(PcAdminCases)