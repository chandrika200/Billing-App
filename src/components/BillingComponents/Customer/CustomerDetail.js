import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import { startAddCustomer } from '../../../actions/BillingAction'

const CustomerDetail = (props) => {
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
       dispatch(startAddCustomer(values))
        reset.resetForm()
    }

    return (
        <div>
            <h2 style={{textAlign:"center"}}>Customer Details</h2>   
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
                                <Field type='submit' class="btn btn-primary btn-sm"  value='SAVE'  />
                        </Form>
                    </div>
                )}
            </Formik>
        </div>

       </div>
    )
}

export default CustomerDetail