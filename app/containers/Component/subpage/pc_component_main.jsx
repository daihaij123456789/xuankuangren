import React from 'react'
import {Row,Col, Menu, Icon,Breadcrumb} from 'antd'
import PcMetalArtcie from './MetalArticle/pc_metal_artcie'
import {Link} from 'react-router'
import './pc_com_main.less'
const SubMenu = Menu.SubMenu;
class PcComponentMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state= {
            current: '',
            openKeys: [],
            info:{},
            SubMenuArr:[],
            metalObj:''
          }
    }
    handleClick(e){
        var myFetchOptions = {
                method: 'GET'
            };
        this.setState({ current: e.key });
        fetch(`api/admin/metal/${e.key}` , myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({metalObj:json.metal})
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
        fetch("api/admin/metalcategories/categories" , myFetchOptions)
        .then(response => response.json())
        .then(json => {
            this.setState({SubMenuArr:json.metalCategories});
            var keyId = json.metalCategories[0].metals[0]._id
            this.setState({current:keyId});
            fetch(`api/admin/metal/${keyId}` , myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({metalObj:json.metal})
            });
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
                            {this.state.SubMenuArr.map((elem)=> {
                                return <SubMenu key={elem._id} title={<span><Icon type="folder"/><span>{elem.name}</span></span>}>
                                 {elem.metals.map((subelem) => {
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
                        <Breadcrumb style={{ margin: '12px 0' }}>
                          <Breadcrumb.Item><Link to="/"><span>首页</span></Link></Breadcrumb.Item>
                          <Breadcrumb.Item><Link to="/component"><span>技术交流</span></Link></Breadcrumb.Item>
                          <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <PcMetalArtcie metalObj={this.state.metalObj}/>
                    </Col>
                </Row>
                </div>
            </div>
        )
    }
}

export default PcComponentMain