import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setDashboard } from "../redux/slices/sidebarSlice";

function Sidebar(){

    const dispatch = useDispatch()

    const sidebarRef = useRef(null)

    const toogleSidebar = () =>{
        function setSidebarwidth(){
            return sidebarRef.current.style.width === "230px" ? "80px" : "230px"
        }

        sidebarRef.current.style.width = setSidebarwidth()
    }

    return (
        <div ref={sidebarRef} className="d-flex h-100 bg-white shadow overflow-hidden" style={{width:"230px",transition:"0.5s width",zIndex:"10"}}>
            <div className="d-flex flex-column h-100" style={{width:"80px"}}>

                <div className="d-flex flex-column h-100 w-100">

                    <div onClick={toogleSidebar} className="d-flex align-items-center justify-content-center" style={{height:"80px",width:"80px"}}><i class="fa-brands fa-product-hunt fs-3"></i></div>
                    <div className="mt-2" style={{height:"40px"}}><i class="fa-solid fa-gauge text-secondary"></i></div>
                    <div className="mt-2" style={{height:"40px"}}><i class="fa-solid fa-cart-shopping text-secondary"></i></div>
                    <div className="mt-2" style={{height:"40px"}}><i class="fa-solid fa-bars-progress text-secondary"></i></div>
                
                </div>

                <div className="d-flex flex-column w-100 mt-auto">

                    <div className="mt-2" style={{height:"40px"}}><i class="fa-solid fa-gear text-secondary"></i></div>
                    <div className="mt-2" style={{height:"40px"}}><i class="fa-solid fa-circle-info text-secondary"></i></div>
                
                </div>
            
            </div>

            <div className="d-flex flex-column h-100" style={{width:"150px"}}>

                <div className="d-flex flex-column h-100 w-100">

                    <div className="d-flex align-items-center fw-bold" style={{height:"80px"}}>Product</div>
                    <div onClick={()=>{dispatch(setDashboard(true))}} className="mt-2 fw-bold text-start text-secondary"  style={{height:"40px",fontSize:"14px"}}>Dashboard</div>
                    <div onClick={()=>{dispatch(setDashboard(false))}} className="mt-2 fw-bold text-start text-secondary"  style={{height:"40px",fontSize:"14px"}}>Orders</div>
                    <div className="mt-2 fw-bold text-start text-secondary text-nowrap"  style={{height:"40px",fontSize:"14px"}}>Manage Users</div>

                </div>

                <div className="d-flex flex-column w-100 mt-auto">

                    <div className="mt-2 fw-bold text-start text-secondary"  style={{height:"40px",fontSize:"14px"}}>Settings</div>
                    <div className="mt-2 fw-bold text-start text-secondary"  style={{height:"40px",fontSize:"14px"}}>Help</div>

                </div>

            </div>

        </div>
    )

}

export default Sidebar;