import {PieChart,Pie,Cell} from 'recharts'

export default function Dashboard(){

    const innerdata = [
        {name:'c1',value:100},
        {name:'c2',value:50},
        {name:'c3',value:200},
        {name:'c4',value:130}
    ]

    const outerdata = [
        {name:'p1',value:10},
        {name:'p2',value:50},
        {name:'p3',value:200},
        {name:'p4',value:130},
        {name:'p5',value:130}
    ]

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    return (
        <div className="d-flex flex-column w-100 h-100 p-2 bg-light">
            <div className="d-flex w-100">
                <div className="container-fluid">
                    <div className="row text-start">
                        <div className="col-lg-5 col-md-6" style={{fontSize:"13px"}}>
                            <div className="p-2 bg-white shadow rounded">
                                <div className="row text-center mt-2 fw-bold text-secondary"><div className="col">Welocme to your Dashboard</div></div>
                                <div className="row text-center fs-6 mt-4 fw-bold text-success"><div className="col">1234 - 2343 -2342</div></div>
                                <div className="row text-center text-secondary"><div className="col">Member ID</div></div>
                                <div className="row text-center border-top mt-4">
                                    <div className="col py-3">
                                        <div className="row fw-bold text-start"><div className="col">John Doe</div></div>
                                        <div className="row text-start text-secondary"><div className="col">Member Since 2023 Feb 21</div></div>
                                    </div>
                                    <div className="col py-3 text-primary fw-bold text-end">View your Membership Card</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6"  style={{fontSize:"13px"}}>
                            <div className="p-2">
                                <div className="row text-start">
                                    <div className="col fw-bold fs-6">Active Plans</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <div className="d-flex flex-column justify-contents-center align-items-center bg-white shadow border-2 border-bottom border-danger">
                                            <div className="bg-danger bg-gradient text-white p-2 py-1 rounded mt-3"><i class="me-2 fa-solid fa-briefcase-medical text-white"></i>Medical</div>
                                            <div className="text-dark  fw-bold text-center mt-4">Core Plus PHD5000</div>
                                            <div className="text-success border rounded border-success p-2 py-1 mt-4 mb-3">View More</div>
                                        </div>
                                       
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column justify-contents-center align-items-center bg-white shadow border-2 border-bottom border-warning">
                                            <div className="bg-warning bg-gradient text-white p-2 py-1 rounded mt-3"><i class="me-2 fa-solid fa-briefcase-medical text-white"></i>Pharmacy</div>
                                            <div className="text-dark  fw-bold text-center mt-4">Core Plus PHD5000</div>
                                            <div className="text-success border rounded border-success p-2 py-1 mt-4 mb-3">View More</div>
                                        </div>
                                       
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column justify-contents-center align-items-center bg-white shadow border-2 border-bottom border-primary">
                                            <div className="bg-primary bg-gradient text-white p-2 py-1 rounded mt-3"><i class="me-2 fa-solid fa-briefcase-medical text-white"></i>Dental</div>
                                            <div className="text-dark  fw-bold text-center mt-4">Core Plus PHD5000</div>
                                            <div className="text-success border rounded border-success p-2 py-1 mt-4 mb-3">View More</div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-start mt-3 bg-white p-2 rounded shadow">
                        <div className="col-6">
                            <div className="d-flex flex-column w-100">
                                <div className="fw-bold">Accumulators</div>
                                <div className="row mt-3">
                                    <div className="col"><div class="dropdown">
                                        <button style={{fontSize:"13px"}} class="btn btn-white border rounded dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown 1
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>item 1</li>
                                        </ul>
                                        </div></div>
                                    <div className="col">
                                    <div className="col">
                                        <div class="dropdown">
                                            <button style={{fontSize:"13px"}} class="btn btn-white border rounded dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown 1
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>item 1</li>
                                            </ul>
                                        </div></div>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col"><div class="dropdown">
                                        <button style={{fontSize:"13px"}} class="btn btn-white border rounded dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown 1
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>item 1</li>
                                        </ul>
                                        </div></div>
                                    <div className="col">
                                    <div className="col">
                                        <div class="dropdown">
                                            <button style={{fontSize:"13px"}} class="btn btn-white border rounded dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown 1
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>item 1</li>
                                            </ul>
                                        </div></div>
                                    </div>
                                </div>
                                <div className='row mt-1'>
                                    <PieChart width={400} height={400}>
                                        <Pie data={innerdata} dataKey="value" outerRadius={100} >
                                            {innerdata.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Pie data={outerdata} dataKey="value" innerRadius={130} />
                                    </PieChart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}