import React from 'react'
import PcHeader from '../../components/PcHeader/pc_header'
import PcFooter from '../../components/PcFooter/pc_footer'
import PcMetalMain from './subpage/pc_metal_main'

class PcMetal extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div id="react-content">
                <div className="page-wrapper">
                    <PcHeader type="component"/>
                    <PcMetalMain />
                    <PcFooter/>
                </div>
            </div>
        )
    }
}
export default PcMetal