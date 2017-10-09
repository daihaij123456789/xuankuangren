import React from 'react'
import PcHeader from '../../components/PcHeader/pc_header'
import PcFooter from '../../components/PcFooter/pc_footer'
import PcSection from './subpage/pc_section'
import PcHomePages from './subpage/pc_home_page'
class PcHemo extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <div id="react-content">
                <div className="page-wrapper">
                    <PcHeader type="home"/>
                    <PcSection />
                    <PcHomePages />
                    <PcFooter/>
                </div>
            </div>
        )
    }
}

export default PcHemo