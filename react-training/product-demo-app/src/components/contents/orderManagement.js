import React, { useEffect, useMemo, useState, useRef } from "react";
import { useFilters, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'
import axios from 'axios'

export default function OrderManage(){

    const [data,setData] = useState([])

    const gotoRef = useRef(null)
    const pagesizeRef = useRef(null)
    const searchRef = useRef(null)

    const ColumnFilter = ({column}) => {
        const {filterValue,setFilter} = column
        return (
            <input className="p-1 mt-1" value={filterValue || ''}  onChange={(e)=>{setFilter(e.target.value)}} />
        )
    }

    const defaultColumn = useMemo (()=>{
        return {
            Filter : ColumnFilter
        }
    },[])

    const COLUMNS = [
        {
            Header : 'ID',
            accessor : 'id'
        },
        {
            Header : 'Name',
            accessor : 'name',
            Cell : (props) => (
                <div className="d-flex align-items-center">
                    <img className="ms-2 rounded" style={{width:"2rem"}} src="https://via.placeholder.com/600/771796" />
                    <div className="ms-2">{props.row.original.name}</div>
                </div>
            )
        },
        {
            Header : 'Email ID',
            accessor : 'email'
        },
        {
            Header : 'Username',
            accessor : 'username'
        },
        {
            Header : 'Street',
            accessor : 'address.street',
            Cell : (props)=>(
                <div className="bg-success rounded text-white">{props.row.original.address.street}</div>
            )
        },
        {
            Header : 'City',
            accessor : 'address.city',
            id :'city'
        }
    ]

    const columns = useMemo(()=>COLUMNS,[])

    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                setData(response.data)
            })
    },[])

    const {
        getTableBodyProps,getTableProps,headerGroups,prepareRow,rows,
        page,nextPage,previousPage,canNextPage,canPreviousPage,pageCount,pageOptions,gotoPage,setPageSize,
        state:{pageIndex,pageSize,globalFilter},
        setGlobalFilter,setAllFilters,
        allColumns,getToggleHideAllColumnsProps
    } = useTable(
        {
            columns,data,defaultColumn,
            initialState:{pageSize:10,hiddenColumns:['username']}
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    function gotohandler(){
        const pageNumber = gotoRef.current.value ? Number(gotoRef.current.value) - 1 : 0
        gotoPage(pageNumber)
    }

    return(
        <>
        <div className="w-100 h-100 p-2 overflow-auto">
            <div className="d-flex align-items-center w-100">
                <input ref={searchRef} type='text' value={globalFilter || ''} placeholder="search here" className="my-2" onChange={()=>{setGlobalFilter(searchRef.current.value)}}/>
                <div class="dropdown ms-2" >
                    <button style={{fontSize:"13px"}} class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hide / Show Columns
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <div className="d-flex" style={{fontSize:"13px"}}>
                                <input className="ms-2" type='checkbox' {...getToggleHideAllColumnsProps()}/>
                                <div className="ms-2">Toggle All</div>
                            </div>
                        </li>
                        {
                            allColumns.map((column)=>(
                                <li>
                                    <div className="d-flex" style={{fontSize:"13px"}}>
                                        <input className="ms-2" type='checkbox' {...column.getToggleHiddenProps()}/>
                                        <div className="ms-2">{column.Header}</div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <table className="bg-white w-100" {...getTableProps()} style={{fontSize:"13px"}}>
                <thead className="bg-info bg-gradient">
                    {headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column)=>{
                                if(column.id === 'id')
                                return (
                                <th className="position-sticky start-0 bg-info bg-gradient" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span className="ms-2 ">
                                        {column.isSorted ? ( column.isSortedDesc ? <i class="fa-solid fa-arrow-down-wide-short text-primary"></i> : <i class="fa-solid fa-arrow-up-wide-short text-primary"></i>) : ''}
                                    </span>
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                                )
                                else if(column.id === 'city')
                                return (
                                <th className="position-sticky end-0 bg-info bg-gradient" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span className="ms-2 ">
                                        {column.isSorted ? ( column.isSortedDesc ? <i class="fa-solid fa-arrow-down-wide-short text-primary"></i> : <i class="fa-solid fa-arrow-up-wide-short text-primary"></i>) : ''}
                                    </span>
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                                )
                                else
                                return (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span className="ms-2 ">
                                            {column.isSorted ? ( column.isSortedDesc ? <i class="fa-solid fa-arrow-down-wide-short text-primary"></i> : <i class="fa-solid fa-arrow-up-wide-short text-primary"></i>) : ''}
                                        </span>
                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    </th>
                                    )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row)=>{
                        prepareRow(row);
                        return(
                            <tr className="border-bottom" {...row.getRowProps()}>
                                {row.cells.map((cell)=>{
                                    if(cell.column.id === 'id'){
                                    return (
                                        <td className="p-2 position-sticky start-0 bg-white border-end">{cell.render('Cell')}</td>
                                    )}
                                    else if(cell.column.id === 'city'){
                                        return (
                                            <td className="p-2 position-sticky end-0 bg-white border-end">{cell.render('Cell')}</td>
                                    )}
                                    else{
                                        return (
                                            <td className="p-2">{cell.render('Cell')}</td>
                                        )  
                                    }
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div className="d-flex w-100 border-top bg-white mt-auto py-2 justify-content-center align-items-center" style={{fontSize:"13px"}}>
            <div className="me-2 fw-bold">Go to Page</div>
            <input style={{width:"4em"}} className="rounded me-2" ref={gotoRef} type='number' onChange={gotohandler} defaultValue={pageIndex + 1}/>
            <i onClick={()=>gotoPage(0)} disabled={!canPreviousPage} class="fa-solid fa-backward me-2 text-primary"></i>
            <div className="fw-bold bg-info rounded p-1 me-2" onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</div>
            <div>{"Page "+(pageIndex + 1)+" of "+pageOptions.length}</div>
            <div className="fw-bold bg-info rounded p-1 ms-2" onClick={()=>nextPage()} disabled={!canNextPage}>Next</div>
            <i onClick={()=>gotoPage(pageCount - 1)} disabled={!canNextPage} class="fa-solid fa-forward ms-2 text-primary"></i>
            <div className="ms-2 fw-bold">Page Size</div>
            <select ref={pagesizeRef} className="ms-2 rounded " onChange={()=>setPageSize(Number(pagesizeRef.current.value))}>
                {[3,5,10,20].map(pageSize=>(
                    <option key={pageSize} value={pageSize}>{pageSize}</option>
                ))}
            </select>
        </div>
        </>
    )
}