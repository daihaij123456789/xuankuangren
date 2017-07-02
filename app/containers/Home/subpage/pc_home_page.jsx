import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import PcHomePage from '../../../components/PcHomePage/pc_home_page'
import PcHomePageBottom from './pc_home_page_bottom'
import './pc_body.less'
class PcHomePages extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            pageArr : []
        }
    }
    render() {
        this.state.pageArr = [
        {page:'page1',image:'image1',title:'最佳案例',content:'近几年的项目实践，积累了大量的矿业经验。',link:'/introduce'},
        {page:'page2',image:'image2',title:'案例分析',content:'总结难选矿石的技术问题，并提供相应的解决方案。',link:'/introduce'},
        {page:'page3',image:'image3',title:'丰富的团队技术',content:'丰富、灵活、实用的技术方案，为矿业产品提供强有力的技术支持。',link:'/introduce'}
        ]
        return (           
            <div>
                {
                    this.state.pageArr.map(function(elem,index) {
                        return <PcHomePage page={elem.page} image={elem.image} title={elem.title} content={elem.content} link={elem.link} key={index}/>
                    })
                }
                <PcHomePageBottom />
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
)(PcHomePages)