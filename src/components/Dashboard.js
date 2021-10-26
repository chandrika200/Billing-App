import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetAllBills, startGetAllProducts, startGetAllCustomers } from '../actions/BillingAction'
import BillChart from './BillChart'
import {FaProductHunt,FaMoneyBillAlt} from 'react-icons/fa'
import {RiBillLine} from 'react-icons/ri'
import {BsFillPeopleFill} from 'react-icons/bs'
import './dashboard.css'

const Dashboard = (props) => {
    const { customers, products, bills } = useSelector((state) => {
        return state.details
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetAllCustomers())
        dispatch(startGetAllProducts())
        dispatch(startGetAllBills())
    }, [])

    const totalAmount = () => {
        let total = 0
        bills.forEach((ele) => (total += ele.total))
        return total
    }

    return (
        <div className="col-sm-9">
        <BillChart/>
        
         <div className="featured">
             <div className="featuredItem">
                 <span className="featuredTitle"> Total Customers</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">{customers.length}</span>
                     <span className="featuredMoneyRate"><BsFillPeopleFill className="featuredIcon "/></span>
                 </div>
                 
             </div>
             <div className="featuredItem">
                 <span className="featuredTitle"> Total Products</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">{products.length}</span>
                     <span className="featuredMoneyRate"><FaProductHunt className="featuredIcon negative"/></span>
                 </div>
                 
             </div>
             <div className="featuredItem">
                 <span className="featuredTitle"> Total Orders</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">{bills.length}</span>
                     <span className="featuredMoneyRate"><FaMoneyBillAlt className="featuredIcon" /></span>
                 </div>
                 
             </div>
             <div className="featuredItem">
                 <span className="featuredTitle"> Total Bill Amount</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">{totalAmount()}</span>
                     <span className="featuredMoneyRate"><RiBillLine className="featuredIcon"/></span>
                 </div>
                 
             </div>
             
         </div>
        </div>
      
           
        
    )
}

export default Dashboard