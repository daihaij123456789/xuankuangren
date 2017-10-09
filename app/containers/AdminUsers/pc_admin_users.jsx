import React from 'react'
import PcHeader from '../../components/PcHeader/pc_header'
import PcFooter from '../../components/PcFooter/pc_footer'
import PcAdminUsersMain from './subpage/pc_admin_users_main'

class PcAdminNews extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }
    render() {
        return (
            <div id="react-content">
                <div className="page-wrapper">
                    <PcHeader/>
                    <PcAdminUsersMain />
                    <PcFooter/>
                </div>
            </div>
        )
    }
}
export default PcAdminNews