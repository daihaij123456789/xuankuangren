import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'



// 创建 Redux 的 store 对象
const store = configureStore();



import MediaQuery from 'react-responsive';
import './static/css/common.less'
import './static/css/font.css'
import './css/index-1.css'
import './css/index-2.css'
import PcHome from './containers/Home/pc_index'
render(
    <Provider store={store}>
    <div>
		<MediaQuery query='(min-device-width: 1224px)'>
			<PcHome history={hashHistory}/>
		</MediaQuery>
	</div>
    </Provider>,
    document.getElementById('root')
)
