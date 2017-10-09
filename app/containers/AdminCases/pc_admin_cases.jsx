import React from 'react'
import PcHeader from '../../components/PcHeader/pc_header'
import PcFooter from '../../components/PcFooter/pc_footer'
import PcAdminCaseMain from './subpage/pc_admin_case_main'

class PcAdminCases extends React.Component {
    render() {
        return (
            <div id="react-content">
                <div className="page-wrapper">
                    <PcHeader/>
                    <PcAdminCaseMain />
                    <PcFooter/>
                </div>
            </div>
        )
    }
}
export default PcAdminCases