import React from 'react'
import {Breadcrumb} from 'antd'
import Cu from './YsMetal/Cu'
import Pb from './YsMetal/Pb'
import Al from './YsMetal/Al'
import Zn from './YsMetal/Zn'
import {Link} from 'react-router'
import './pc_metal_main.less'
import axios from 'axios';
class PcMetalMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state= {
            metalObj:''
          }
    }
  componentDidMount() {
    if(!window.location){
        return false
    }
    var urlLast = window.location.href.split('/')[5].split('?');
    var myFetchOptions = {
              method: 'GET',
              headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'

               } 
            };
   fetch(`api/admin/metal/${urlLast[0]}`, myFetchOptions)
            .then(response => response.json())
            .then(json =>{
                this.setState({metalObj:json.metal})
            });
    };
    render() { 
        const createAt = this.state.metalObj.meta ? this.state.metalObj.meta.createAt:'';
        var name = this.state.metalObj.name;          
        return (
            <div className="main-warpper">
                <div style={{background:'#fff',marginLeft:'50px',marginRight:'50px'}}>
                    <div>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                      <Breadcrumb.Item><Link to="/"><span>首页</span></Link></Breadcrumb.Item>
                      <Breadcrumb.Item><Link to="/component"><span>技术交流</span></Link></Breadcrumb.Item>
                      <Breadcrumb.Item>{this.state.metalObj.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    </div>
                    <div>
                        <div className="yc_tit">
                        <h1 className="pc_metal_artcie_h1">{this.state.metalObj.name}</h1>
                        <div className="pc_metal_artcie_jj"><span>作者:{this.state.metalObj.author_name} </span><span>创建时间: {createAt}</span></div>
                        </div>
                    </div>
                    <div>
                    {(() => {
                        switch (name) {
                            case '铜':
                                return <Cu />; break;
                            case "铅": 
                                return <Pb />; break;
                            case "铝": 
                                return <Al />; break;
                            case "锌": 
                                return <Zn />; break;
                            default :
                                null
                        }
                    })()}
                    </div>
                </div>
            </div>
        )
    }
}

export default PcMetalMain