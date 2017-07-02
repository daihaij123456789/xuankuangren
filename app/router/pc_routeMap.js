import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import PcHome from '../containers/Home/pc_index'
import MbHome from '../containers/Home/mb_index'
import PcIntroduce from '../containers/Introduce/pc_introduce'
import PcComponent from '../containers/Component/pc_component'
import PcPattern from '../containers/Pattern/pc_pattern'
import PcResourec from '../containers/Resourec/pc_resourec'
import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={PcHome}/>
                    <Route path='introduce' component={PcIntroduce}></Route>
                    <Route path='component' component={PcComponent}></Route>
                    <Route path='pattern' component={PcPattern}></Route>
                    <Route path='resourec' component={PcResourec}></Route>
                </Route>
                
            </Router>
        )
    }
}

export default RouterMap
