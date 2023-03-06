import React from "react";
import { useSelector } from "react-redux";


function Navigationbar(){

    const username = useSelector((state)=>state.login.username)

    return(
        <div className="d-flex flex-row-reverse w-100 bg-white border-bottom align-items-center py-2">
            <i class="fa-regular fa-user bg-dark text-white p-2 me-3 rounded"></i>
            <div className="me-3 text-secondary" style={{fontSize:"14px"}}>{username}</div>
        </div>
    )
}

export default Navigationbar;