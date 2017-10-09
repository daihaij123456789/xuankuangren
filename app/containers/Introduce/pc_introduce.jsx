import React from 'react'
 import PcHeader from '../../components/PcHeader/pc_header'
 import PcFooter from '../../components/PcFooter/pc_footer'
import PcIntroduceMain from './subpage/pc_introduce_main'
import PCNewsContainer from './subpage/Pc_NewsContainer'
class PcIntroduce extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div id="react-content">
                <div className="page-wrapper">
                    <PcHeader type="introduce"/>
                    <PCNewsContainer />
                    <PcFooter />
                </div>
            </div>
        )
    }
}


export default PcIntroduce