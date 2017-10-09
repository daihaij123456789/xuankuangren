import React from 'react'
import PcHeader from '../../components/PcHeader/pc_header'
import PcFooter from '../../components/PcFooter/pc_footer'
import PcComponentMain from './subpage/pc_component_main_new'

class PcComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div id="react-content">
                <div className="page-wrapper">
                    <PcHeader type="component"/>
                    <PcComponentMain />
                    <PcFooter/>
                </div>
            </div>
        )
    }
}
export default PcComponent