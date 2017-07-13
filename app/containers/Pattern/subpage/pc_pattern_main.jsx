import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import {Row,Col, Menu, Icon} from 'antd'
import PcCaseArtcie from './CaseArticle/pc_case_artcie'
import './pc_pattern_main.less'
const SubMenu = Menu.SubMenu;
class PcPatternMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            current: '',
            openKeys: [],
            info:{},
            SubMenuArr:[],
            caseObj:''
          }
    }
    handleClick(e){
        var myFetchOptions = {
                method: 'GET'
            };
        this.setState({ current: e.key });
        fetch(`api/admin/case/${e.key}` , myFetchOptions)
            .then(response => response.json())
            .then(json => {
               console.log(json.caseNewObj)
                this.setState({caseObj:json.caseNewObj})
            });
        
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
          sub3: [],
        };
        return map[key] || [];
      }
  componentDidMount() {
       var myFetchOptions = {
                method: 'GET'
            };
        fetch("api/admin/casecategories/categories" , myFetchOptions)
        .then(response => response.json())
        .then(json => {
            
            this.setState({SubMenuArr:json.caseCategories});
            if(json.caseCategories.length > 0){
                
                var keyId = json.caseCategories[0].cases[0]._id;
                this.setState({current:keyId});
                fetch(`api/admin/case/${keyId}` , myFetchOptions)
                .then(response => response.json())
                .then(json => {
                    this.setState({caseObj:json.caseNewObj});
                })
            }
            
        });
        
    }
    
    render() { 
        const MenuList = this.state.SubMenuArr.length>0 ? 
                        <Menu
                            mode="inline"
                            openKeys={this.state.openKeys}
                            selectedKeys={[this.state.current]}
                            onOpenChange={this.onOpenChange.bind(this)}
                            onClick={this.handleClick.bind(this)}
                        >
                            {
                                this.state.SubMenuArr.map((elem)=> {
                                 return <SubMenu key={elem._id} title={<span><Icon type="appstore"/><span>{elem.name}</span></span>}>
                                    {elem.cases.map((subelem) => {
                                     return <Menu.Item key={subelem._id}>{subelem.name}</Menu.Item>
                                    })}
                                 </SubMenu>
                            })}
                        </Menu>
                            :"没有数据"
        return (
            <div className="main-warpper">
                <div style={{background:'#fff',marginLeft:'50px',marginRight:'50px'}}>
                <Row >
                    <Col xs={{ span: 24 }}  sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 3}}>
                          {MenuList}
                    </Col>
                    <Col xs={{ span: 0 }}  sm={{ span: 0 }} md={{ span: 19 }}  lg={{ span: 21 }} className="main-container">
                        <PcCaseArtcie caseObj={this.state.caseObj}/>
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
)(PcPatternMain)