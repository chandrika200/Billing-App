import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { startGetAllProducts, startDeleteProduct } from '../../../actions/BillingAction'
import FilterResults from 'react-filter-search'
import { FaSistrix } from 'react-icons/fa'

const DeleteProduct = (props)=>{
    const {handleEdit} = props
    const [search,setSearch]=useState('')
    const dispatch=useDispatch()

    const products = useSelector((state)=>{
        return state.details.products
    })
    useEffect(()=>{
        dispatch(startGetAllProducts())
    },[])

    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }

    const handleProductRemove=(id)=>{
        const confirm=window.confirm('Are you sure?')
            if(confirm){
               dispatch(startDeleteProduct(id))
            }
    }

    return (
        <div className="mb-3">
            {products.length===0? (
                <h3>No Products Added</h3>
            ) : (
                <div className="mb-6">
                    <div className="row">
                    <div className="col-md-4 mb-3">
                    <h3>List of Products - {products.length}</h3>
                    </div>
                    <div className="col-md-6 mt-2 dark">
                        <FaSistrix size="2rem"/>
                    <input  type="search" 
                            placeholder='search products' 
                            value={search}
                            onChange={handleSearch}/>
                            </div>
                            </div>
                            <div className="row ">
                            <div className="col-md-12 ">
                    <table className='table table-active table-hover'>
                        <thead className='thead-dark'> 
                            <tr>
                                <th scope="col">Sl.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        <FilterResults 
                            value={search}
                            data={products}
                            renderResults={(results)=>(
                                <>
                                    {results.map((data,i)=>(
                                            <tr key={data._id} >
                                                <td >{i+1}</td>
                                                <td >{data.name[0].toUpperCase()+data.name.slice(1)}</td>
                                                <td >{data.price}</td>
                                                <td ><button onClick={()=>{
                                                    handleEdit(data._id)
                                                    }} className="btn btn-primary btn-sm badge-pill"
                                                    >EDIT</button></td>
                                                <td ><button 
                                                    onClick={()=>{
                                                    handleProductRemove(data._id)
                                                    }}
                                                    className="btn btn-danger btn-sm badge-pill"
                                                    >DELETE</button></td>
                                            </tr>
                                        ))
                                    }
                                </>
                            )}
                        />
                        </tbody>
                    </table>
                    </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DeleteProduct