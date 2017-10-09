import React from 'react'
import './pc_metal_atcie.less'
import PcMetalCu from './YsMetal/Cu'
class PcMetalArtcie extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        const metalObj = this.props.metalObj;
        const createAt = metalObj.meta ? metalObj.meta.createAt:'';
        console.log(metalObj)
        return(
            <div>
                <div className="yc_tit">
                <h1 className="pc_metal_artcie_h1">{metalObj.name}</h1>
                <div className="pc_metal_artcie_jj"><span>作者:{metalObj.author_name} </span><span>创建时间: {createAt}</span></div>
                </div>
                <PcMetalCu />
            </div>
        )
    }
}


export default PcMetalArtcie