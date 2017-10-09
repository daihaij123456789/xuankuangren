import React from 'react'
import {Row,Col, Menu, Icon,Breadcrumb} from 'antd'
import PcMetalArtcie from './MetalArticle/pc_metal_artcie'
import {Link} from 'react-router'
import './pc_com_main_new.less'
const SubMenu = Menu.SubMenu;
class PcComponentMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state= {
            SubMenuArr:[]
          }
    }
    componentDidMount() {
       var myFetchOptions = {
                method: 'GET'
            };
        fetch("api/admin/metalcategories/categories" , myFetchOptions)
        .then(response => response.json())
        .then(json => {
            this.setState({SubMenuArr:json.metalCategories});
        });
    }

    render() { 
        const mineralavg1 = this.state.SubMenuArr.length>0 ? 
                <div>
                    <div class="mineraltitlebg"><div class="mineraltitle">金属矿产</div></div>
                        <div class="floatleft mineralsort1 mineralsort">
                            {
                                <div key={this.state.SubMenuArr[0]._id}>
                                        <ul><li className="metalsorttitle" >{this.state.SubMenuArr[0].name}</li></ul>
                                            <ul>
                                            {
                                                
                                                this.state.SubMenuArr[0].metals.map((subelem) => {
                                                        var metalId = subelem._id
                                                     return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort" target="_blank">{subelem.name}</Link></li>
                                                    })
                                            }
                                            </ul>
                                </div>
                            }
                            <div class="clearfloat"></div>
                        </div>
                        <div class="floatleft mineralsort2 mineralsort">
                            {
                            <div>
                                <div key={this.state.SubMenuArr[1]._id}>
                                    <ul><li className="metalsorttitle" >{this.state.SubMenuArr[1].name}</li></ul>
                                        <ul>
                                            {this.state.SubMenuArr[1].metals.map((subelem) => {
                                                var metalId = subelem._id
                                             return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort" target="_blank">{subelem.name}</Link></li>
                                            })}
                                    </ul>
                                </div>
                                <div key={this.state.SubMenuArr[2]._id}>
                                    <ul><li className="metalsorttitle" >{this.state.SubMenuArr[2].name}</li></ul>
                                        <ul>
                                            {this.state.SubMenuArr[2].metals.map((subelem) => {
                                                var metalId = subelem._id
                                             return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort" target="_blank">{subelem.name}</Link></li>
                                            })}
                                    </ul>
                                </div>
                                <div key={this.state.SubMenuArr[5]._id}>
                                    <ul><li className="metalsorttitle" >{this.state.SubMenuArr[5].name}</li></ul>
                                        <ul>
                                            {this.state.SubMenuArr[5].metals.map((subelem) => {
                                                var metalId = subelem._id
                                             return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort" target="_blank">{subelem.name}</Link></li>
                                            })}
                                    </ul>
                                </div>
                            </div>
                            }
                            <div class="clearfloat"></div>
                        </div>
                    <div class="clearfloat"></div>
                </div>            
                :""
        const mineralavg2 = this.state.SubMenuArr.length>0 ? 
                <div>
                    <div class="mineraltitlebg"><div class="mineraltitle">非金属矿产</div></div>
                        <div class="floatleft mineralavg1">
                            <div class="mineralsort">
                            { <div key={this.state.SubMenuArr[7]._id}>
                                        <ul><li className="metalsorttitle" >{this.state.SubMenuArr[7].name}</li></ul>
                                            <ul>
                                                {this.state.SubMenuArr[7].metals.map((subelem) => {
                                                    var metalId = subelem._id
                                                 return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort2" target="_blank">{subelem.name}</Link></li>
                                                })}
                                            </ul>
                                        </div>
                            }
                                <div class="clearfloat"></div>
                            </div>
                            <div class="mineralimg03"></div>
                        </div>
                        <div class="floatleft mineralavg2">
                            <div class="mineralimg04"></div>
                            <div class="mineralsort">
                            {<div>
                                <div key={this.state.SubMenuArr[8]._id}>
                                        <ul><li className="metalsorttitle" >{this.state.SubMenuArr[8].name}</li></ul>
                                            <ul>
                                                {this.state.SubMenuArr[8].metals.map((subelem) => {
                                                    var metalId = subelem._id
                                                 return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort1" target="_blank">{subelem.name}</Link></li>
                                                })}
                                            </ul>
                                </div>
                                <div key={this.state.SubMenuArr[9]._id}>
                                        <ul><li className="metalsorttitle" >{this.state.SubMenuArr[9].name}</li></ul>
                                            <ul>
                                                {this.state.SubMenuArr[9].metals.map((subelem) => {
                                                    var metalId = subelem._id
                                                 return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort1" target="_blank">{subelem.name}</Link></li>
                                                })}
                                            </ul>
                                </div>
                            </div>
                            }
                                <div class="clearfloat"></div>
                            </div>
                        </div>
                        <div class="floatleft mineralavg3">
                            <div class="mineralsort">
                            {<div>
                                <div key={this.state.SubMenuArr[10]._id}>
                                        <ul><li className="metalsorttitle" >{this.state.SubMenuArr[10].name}</li></ul>
                                            <ul>
                                                {this.state.SubMenuArr[10].metals.map((subelem) => {
                                                    var metalId = subelem._id
                                                 return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort2" target="_blank">{subelem.name}</Link></li>
                                                })}
                                            </ul>
                                </div>
                                <div key={this.state.SubMenuArr[11]._id}>
                                        <ul><li className="metalsorttitle" >{this.state.SubMenuArr[11].name}</li></ul>
                                            <ul>
                                                {this.state.SubMenuArr[11].metals.map((subelem) => {
                                                    var metalId = subelem._id
                                                 return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort2" target="_blank">{subelem.name}</Link></li>
                                                })}
                                            </ul>
                                </div>
                            </div>}
                                <div class="clearfloat"></div>
                            </div>
                            <div class="mineralimg05"></div>
                        </div>
                        <div class="floatleft mineralavg4">
                            <div class="mineralimg06"></div>
                            <div class="mineralsort">
                            {<div key={this.state.SubMenuArr[12]._id}>
                                        <ul><li className="metalsorttitle" >{this.state.SubMenuArr[12].name}</li></ul>
                                            <ul>
                                                {this.state.SubMenuArr[12].metals.map((subelem) => {
                                                    var metalId = subelem._id
                                                 return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort2" target="_blank">{subelem.name}</Link></li>
                                                })}
                                            </ul>
                                        </div>
                            }
                                <div class="clearfloat"></div>
                            </div>
                        </div>
                    <div class="clearfloat"></div>
                </div>      
                :""
        const mineralavg3 = this.state.SubMenuArr.length>0 ?
                <div>
                    <div class="mineraltitlebg"><div class="mineraltitle">能源矿产</div></div>
                        <div class="floatleft mineralsort mineralavg5">
                        {<div key={this.state.SubMenuArr[13]._id}>
                                        <ul><li className="metalsorttitle" >{this.state.SubMenuArr[13].name}</li></ul>
                                            <ul>
                                                {this.state.SubMenuArr[13].metals.map((subelem) => {
                                                    var metalId = subelem._id
                                                 return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort2" target="_blank">{subelem.name}</Link></li>
                                                })}
                                            </ul>
                                        </div>
                        }
                            <div class="clearfloat"></div>
                        </div>
                        <div class="floatleft mineralsort mineralavg6">
                        {<div>
                                <div key={this.state.SubMenuArr[14]._id}>
                                        <ul><li className="metalsorttitle" >{this.state.SubMenuArr[14].name}</li></ul>
                                            <ul>
                                                {this.state.SubMenuArr[14].metals.map((subelem) => {
                                                    var metalId = subelem._id
                                                 return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort2" target="_blank">{subelem.name}</Link></li>
                                                })}
                                            </ul>
                                </div>
                                <div key={this.state.SubMenuArr[15]._id}>
                                        <ul><li className="metalsorttitle" >{this.state.SubMenuArr[15].name}</li></ul>
                                            <ul>
                                                {this.state.SubMenuArr[15].metals.map((subelem) => {
                                                    var metalId = subelem._id
                                                 return <li key={subelem._id} ><Link to={`metal/${metalId}`}  className="prosort2" target="_blank">{subelem.name}</Link></li>
                                                })}
                                            </ul>
                                </div>
                            </div>}
                            <div class="clearfloat"></div>
                        </div>
                    <div class="clearfloat"></div>
                </div>
                :""
        return (
            <div className="main-warpper">
            <div style={{background:'#fff',marginLeft:'50px',marginRight:'50px'}}>
                <div id="maindiv" class="maindiv">
                        {mineralavg1}
                        {mineralavg2}
                        {mineralavg3}   
                </div>
            </div>
                
            </div>
        )
    }
}

export default PcComponentMain