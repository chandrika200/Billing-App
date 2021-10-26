import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import { clearCustomerData,startUpdateCustomer } from '../../../actions/BillingAction'

const EditCustomer = (props) => {
    const {handleToggle,_id,name,email,mobile} = props
    const dispatch = useDispatch()

    const initialValues = {
        name: '',
        mobile: '',
        email: ''
    }

    const validateForm = Yup.object({
            name: Yup.string()
                .min(5, 'must be equal to 5 characters and above')
                
                .required('Required'),
            mobile: Yup.string().required('Required'),
            email: Yup.string().email('Email is invalid').required('Required'),
        })
       

    const onSubmit = (values, reset) => {
         console.log(values)
       dispatch(startUpdateCustomer(_id,values))
        reset.resetForm()
        handleToggle(false)
    }

    return (
        <div>
            <h2 style={{textAlign:"center"}}>Edit Customer</h2>   
        <div className="App">
         
            <Formik
                initialValues={initialValues}
                validationSchema={validateForm}
                onSubmit={onSubmit}>
                {(formik) => (
                    <div>
                        <Form >
                            <Field
                                type='text'
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='name'
                               
                            />
                             {formik.errors.name && formik.touched.name && 
                               (<div className="error">{formik.errors.name}</div>)}<br/>
                            <Field
                                type='text'
                                name='mobile'
                                value={ formik.values.mobile}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='mobile'
                               
                            />
                            {formik.errors.mobile && formik.touched.mobile && (
                                <span className="error">{formik.errors.mobile}</span>
                            )}<br/>
                            <Field
                                type='text'
                                name='email'
                                placeholder='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                               
                            />
                            {formik.touched.email && formik.errors.email && (
                                <span className="error">{formik.errors.email}</span>
                            )}<br/>
                                <Field type='submit' className="btn btn-primary btn-sm"  value='SAVE' 
                                />&nbsp;

                                <Field 
                                type="submit"
                                value='CANCEL'
                                className="btn btn-danger btn-sm"
                                onClick={()=>{
                                    handleToggle(false)
                                    dispatch(clearCustomerData())
                                }}/>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>

       </div>
    )
}

export default EditCustomer