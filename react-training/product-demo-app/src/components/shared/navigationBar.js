import React from "react";

function Navigationbar(){
    return(
        <div className="d-flex flex-row-reverse w-100 bg-white border-bottom align-items-center py-2">
            <i class="fa-regular fa-user bg-dark text-white p-2 me-3 rounded"></i>
            <div className="me-3 text-secondary" style={{fontSize:"14px"}}>Product User</div>
        </div>
    )
}

export default Navigationbar;