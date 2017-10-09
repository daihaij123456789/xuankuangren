 import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from '../../store/configureStore'
import PcAdminCases from './pc_admin_cases'

// 创建 Redux 的 store 对象
const store = configureStore();

//import MediaQuery from 'react-responsive';
render(
    <Provider store={store}>
    <div>
        <PcAdminCases />
        {/*<MediaQuery query='(min-device-width: 1224px)'>
            
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
            
        </MediaQuery>*/}
    </div>
    </Provider>,
    document.getElementById('root')
)
