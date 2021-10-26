import React, { useState } from 'react'
import {FaSistrix} from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import { startDeleteCustomer } from '../../../actions/BillingAction'
import FilterResults from 'react-filter-search'


const DeleteCustomer =(props)=>{
     const {customers,handleEdit} = props
     const [search,setSearch] = useState('')
     const dispatch = useDispatch()

     const handleSearch =(e) =>{
         setSearch(e.target.value)
     }
     const handleRemove = (id)=>{
         const confirm=window.confirm('are you sure??')
         if(confirm){
             dispatch(startDeleteCustomer(id))
         }
     }
    return (
        <div className="mb-6">
        <div className="row">
            <div className="col-md-4">
                <h2 className="col-md-10">Total Customers - {customers.length}</h2>
            </div>
            <div className="col-md-4 mt-1  ">
                <FaSistrix size="2rem"/>
                <input
                    id="search-focus"
                    type="search"
                    placeholder='Search'
                    value={search}
                    onChange={handleSearch} />
            </div>
        </div>
        <div className="row ">
                        <div className="col-md-12">
        <table className='table table-active table-hover'>
            <thead className='thead-dark'>
                <tr>
                    <th scope="col">Sl.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <FilterResults
                    value={search}
                    data={customers}
                    renderResults={(results) => (
                        <>
                            {
                                results.map((ele, i) => {
                                    return (
                                        <tr key={ele._id}>
                                            <td >{i + 1}</td>
                                            <td >{ele.name[0] + ele.name.slice(1)}</td>
                                            <td >{ele.mobile}</td>
                                            <td >{ele.email}</td>
                                            
                                            <td ><button onClick={() => {
                                                handleEdit(ele._id)
                                            }} className="btn btn-primary btn-sm badge-pill ">EDIT</button>
                                            </td>
                                            <td >
                                                <button onClick={() => {
                                                    handleRemove(ele._id)
                                                }} className="btn btn-danger btn-sm badge-pill">DELETE</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </>
                    )}
                />
            </tbody>
        </table>
        </div>
        </div>
    </div>
)
}
export default DeleteCustomer