import React from 'react'
import { Router, Route, IndexRoute,hashHistory,browserHistory} from 'react-router'

import App from '../containers'
import PcHome from '../containers/Home/pc_index'
//import PcIntroduce from '../containers/Introduce/pc_introduce'


/*import PcComponent from '../containers/Component/pc_component'
import PcPattern from '../containers/Pattern/pc_pattern'
import PcResourec from '../containers/Resourec/pc_resourec'
import PcMetal from '../containers/Metal/pc_metal'
import PcAdminNews from '../containers/AdminNews/pc_admin_news'
import PcAdminUsers from '../containers/AdminUsers/pc_admin_users'
import PcAdminCases from '../containers/AdminCases/pc_admin_cases'
import PcAdminMetal from '../containers/AdminMetal/pc_admin_metal'
import PcMy from '../containers/My/pc_my'
*/



//import PcNewsDetails from '../containers/NewDetails/pc_news_details'

/*import NotFound from '../containers/404'*/
/*const App = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/index').default)
    },'app1')
}
const PcHome = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/Home/pc_index').default)
    },'PcHome')
}
const PcIntroduce = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/Introduce/pc_introduce').default)
    },'PcIntroduce')
}*/
const PcComponent = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/Component/pc_component').default)
    },'PcComponent')
}
const PcPattern = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/Pattern/pc_pattern').default)
    },'PcPattern')
}
const PcResourec = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/Resourec/pc_resourec').default)
    },'PcResourec')
}
const PcMy = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/My/pc_my').default)
    },'PcMy')
}
const PcMetal = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/Metal/pc_metal').default)
    },'PcMetal')
}
/*const PcNewsDetails = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/NewDetails/pc_news_details').default)
    },'PcNewsDetails')
}
const PcAdminNews = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/AdminNews/pc_admin_news').default)
    },'PcAdminNews')
}
const PcAdminUsers = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/AdminUsers/pc_admin_users').default)
    },'PcAdminUsers')
}
const PcAdminCases = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/AdminCases/pc_admin_cases').default)
    },'PcAdminCases')
}
const PcAdminMetal = (location, cb) => {
    require.ensure([], require => {
    cb(null, require('../containers/AdminMetal/pc_admin_metal').default)
    },'PcAdminMetal')
}*/

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route  path="/" component={App}>
                    <IndexRoute component={PcHome} />
                    <Route path='component' getComponent={PcComponent}></Route>
                    <Route path='pattern' getComponent={PcPattern}></Route>
                    <Route path='resourec' getComponent={PcResourec}></Route>
                    <Route path='my' getComponent={PcMy}></Route>
                    {/*<Route path='/metal/:metalId' getComponent={PcMetal}></Route>*/}
                    <Route path='/metal/5966c664fe8f311478cbd62f' getComponent={PcMetal}></Route>

                    {/*<Route path='introduce' component={PcIntroduce}></Route>
                    <Route path="/details/:uniquekey" getComponent={PcNewsDetails}></Route>*/}
                     

                    {/*<Route path="adminNews" component={PcAdminNews}></Route>
                    <Route path="adminUsers" component={PcAdminUsers}></Route>
                    <Route path="adminCases" component={PcAdminCases}></Route>
                    <Route path="adminMetals" component={PcAdminMetal}></Route>*/}  
                </Route>
            </Router>
        )
    }
}

export default RouterMap
