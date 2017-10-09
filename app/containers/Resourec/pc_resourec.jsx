import React from 'react'
import PcHeader from '../../components/PcHeader/pc_header'
import PcFooter from '../../components/PcFooter/pc_footer'
class PcResourec extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div id="react-content">
                <div className="page-wrapper">
                    <PcHeader type="resourec"/>
                    <PcFooter />
                </div>
            </div>
        )
    }
}
export default PcResourec