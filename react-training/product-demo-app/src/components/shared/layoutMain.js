import React from'react'

import Sidebar from './sidebar';
import Navigationbar from './navigationBar';
import OrderManage from '../contents/orderManagement';

function LayoutMain(){
    return (
        <div className='d-flex w-100 h-100 bg-white'>
            <Sidebar />
            <div className='d-flex flex-column w-100 h-100 align-items-center'>
                <Navigationbar />
                <OrderManage />
            </div>
        </div>
    )
}

export default LayoutMain;