import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Row,Col, Menu, Icon} from 'antd'
import {Router, Route, Link, browserHistory} from 'react-router'
import PcHeader from '../../components/PcHeader/pc_header'
import PcFooter from '../../components/PcFooter/pc_footer'
import PcIntroduceMain from './subpage/pc_introduce_main'
import PCNewsContainer from './subpage/Pc_NewsContainer'
const SubMenu = Menu.SubMenu;
class PcIntroduce extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        
    }
    render() {
        return (
            <div className="page-wrapper">
                <PcHeader type="introduce"/>
                <PCNewsContainer />
                <PcFooter />
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
)(PcIntroduce)