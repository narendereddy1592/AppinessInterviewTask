import {createStore} from 'redux';
import {LoginData, DashBoradData} from './mockData'

const initialState = {
    LoginpageData:LoginData,
    DashBboraddata:DashBoradData
    
}

const reducer = (state=initialState, action) => {
    console.log('running reducer', action)
    return state 
}

const store = createStore(reducer);

export default store;