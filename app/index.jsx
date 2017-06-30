import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'

import './static/css/common.less'
import './static/css/font.css'

// 创建 Redux 的 store 对象
const store = configureStore()

import RouteMap from './router/routeMap'
import PcRouterMap from './router/pc_routeMap'
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
render(
    <Provider store={store}>
    <div>
		<MediaQuery query='(min-device-width: 1224px)'>
			<PcRouterMap history={hashHistory}/>
		</MediaQuery>
		<MediaQuery query='(max-device-width: 1224px)'>
			<RouteMap history={hashHistory}/>
		</MediaQuery>
	</div>
    </Provider>,
    document.getElementById('root')
)
