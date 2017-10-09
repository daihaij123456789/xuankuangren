 import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from '../../store/configureStore'
import PcHeader from './pc_header'
import './pc_header.less'

// 创建 Redux 的 store 对象
const store = configureStore();

import MediaQuery from 'react-responsive';
render(
    <Provider store={store}>
    <div>
		<MediaQuery query='(min-device-width: 1224px)'>
			<PcHeader />
		</MediaQuery>
		<MediaQuery query='(max-device-width: 1224px)'>
		</MediaQuery>
	</div>
    </Provider>,
    document.getElementById('root')
)
