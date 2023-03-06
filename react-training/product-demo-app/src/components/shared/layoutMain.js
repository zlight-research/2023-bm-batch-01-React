import React from'react'

import Sidebar from './sidebar';
import Navigationbar from './navigationBar';
import OrderManage from '../contents/orderManagement';
import Dashboard from '../contents/dashboard';
import ReduxTest from '../contents/reduxtest';

import { useSelector } from 'react-redux';

function LayoutMain(){

    const isDashboard = useSelector((state)=>state.sidebar.isdashboard)

    return (
        <div className='d-flex w-100 h-100 bg-white'>
            <Sidebar />
            <div className='d-flex flex-column w-100 h-100 align-items-center'>
                <Navigationbar />
                { !isDashboard && <OrderManage /> }
                { isDashboard && <Dashboard /> }
                {/* <ReduxTest /> */}
            </div>
        </div>
    )
}

export default LayoutMain;