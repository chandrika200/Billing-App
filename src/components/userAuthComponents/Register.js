import React,{useState,useEffect} from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { startRegisterUser } from '../../actions/userAction'
import { useDispatch,useSelector } from 'react-redux'


const Register = (props) => {
    const [isRegistered,setIsRegistered] = useState(false)
    const dispatch = useDispatch()
   
    const userData = useSelector((state)=>{
        return state.user
    })
    useEffect(()=>{
        if(isRegistered){
            props.history.push('/login')
        }
    },[userData])
  
    const initialValues = {
        username: '',
        email: '',
        password: '',
        businessName: '',
        address: ''
    }
    const validateForm =
         Yup.object({
            username: Yup.string()
                .min(5, 'Too short')
                .required('* required'),
            email: Yup.string().email('Invalid Email').required('* required'),
            password: Yup.string()
                .min(6, 'Password is too short,should be minimum 6 characters')
                .required('* required'),
            businessName: Yup.string()
                .required('* required'),
            address: Yup.string().required('* required'),
        })
       
    
    const handleSubmit = (values,reset) => {
        console.log(values)
       setIsRegistered(true)
       reset.resetForm()
       dispatch(startRegisterUser(values))
    }

    return (
        <div >
            <h3 style={{padding:"10px",textAlign:"center"}}>Register here</h3>
            <div className="App">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateForm}
                    onSubmit={handleSubmit} >
                    {(formik) => (
                        <div>
                            <Form >
                                <div>
                                    <Field type="text"
                                        name="username"
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Enter your Name"
                                        />
                                    {formik.touched.username && formik.errors.username && (<div className="error">{formik.errors.username}</div>)} <br />

                                    <Field type="text"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Email"
                                        />
                                    {formik.touched.email && formik.errors.email &&(<div className='error'>{formik.errors.email}</div>)} <br />

                                    <Field type="text"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="password"
                                        />
                                    {formik.touched.password && formik.errors.password && (<div className='error'>{formik.errors.password}</div>)} <br />

                                    <Field type="text"
                                        name="businessName"
                                        value={formik.values.businessName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="business Name"
                                        className="form-control form-control-sm" />
                                    {formik.touched.businessName && formik.errors.businessName && (<div className='error'>{formik.errors.businessName}</div>)} <br />

                                    <Field type="text"
                                        name="address"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="address"
                                       />
                                    {formik.touched.address && formik.errors.address && (<div className='error'>{formik.errors.address}</div>)}<br />

                                    <Field
                                     type='submit'
                                     value='REGISTER'
                                     className="btn btn-primary btn-sm"
                                     />
                                </div>
                            </Form>
                        </div>
                    )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default Register
