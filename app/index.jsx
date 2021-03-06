import React from 'react'
import { render } from 'react-dom'
/*import { Provider } from 'react-redux'*/
import { hashHistory } from 'react-router'
/*import configureStore from './store/configureStore'*/



/*// 创建 Redux 的 store 对象
const store = configureStore();*/

import MbRouteMap from './router/mb_routeMap'
import PcRouterMap from './router/pc_routeMap'

import MediaQuery from 'react-responsive';

import './css/pc-index.css'
render(
    <div>
		<MediaQuery query='(min-device-width: 1224px)'>
			<PcRouterMap history={hashHistory}/>
		</MediaQuery>
		<MediaQuery query='(max-device-width: 1224px)'>
			<MbRouteMap history={hashHistory}/>
		</MediaQuery>
	</div>,
    document.getElementById('root')
)
