import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Row,Col, Menu, Icon} from 'antd'
import {Router, Route, Link, browserHistory} from 'react-router'
import PcHeader from '../../components/PcHeader/pc_header'
import PcFooter from '../../components/PcFooter/pc_footer'
import PcPatternMain from './subpage/pc_pattern_main'
const SubMenu = Menu.SubMenu;
class PcPattern extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div id="react-content">
                <div className="page-wrapper">
                    <PcHeader type="pattern"/>
                    <PcPatternMain />
                    <PcFooter />
                </div>
            </div>
        )
    }
}


export default PcPattern