import React from 'react'
import PcHeader from '../../components/PcHeader/pc_header'
import PcFooter from '../../components/PcFooter/pc_footer'
import PcAdminMetalMain from './subpage/pc_admin_metal_main'

class PcAdminMetal extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div id="react-content">
                <div className="page-wrapper">
                    <PcHeader/>
                    <PcAdminMetalMain />
                    <PcFooter/>
                </div>
            </div>
        )
    }
}


export default PcAdminMetal