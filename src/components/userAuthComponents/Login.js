import React, { useEffect,useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import  {startLoginUser} from '../../actions/userAction'  
import { useDispatch,useSelector } from 'react-redux'



const Login = (props) => {
    const [isSubmitted,setIsSubmitted] = useState(false)
    const {userAuth} = props
    const dispatch = useDispatch()

    const userLogin = useSelector((state)=>{
       return state.user
    })

    useEffect(()=>{
        if(isSubmitted){
            userAuth()
            props.history.push('/')
        }
    },[userLogin])
    const initialValues = {
        email: '',
        password: ''
    }


    const validate = Yup.object({
        email: Yup.string().email('Invalid email').required('* email required'),
        password: Yup.string()
            .min(6, 'password should minimum 6 characters')
            .required('* password required')
    })

    const handleSubmit = (values,reset ) => {
        console.log(values)
        setIsSubmitted(true)
        dispatch(startLoginUser(values))
        reset.resetForm()

        
    }

    return (
        <div  >
            <h2 style={{textAlign:"center"}}>Login</h2>
            <div className="App">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validate} >
                {(formik) => (
                    <div >
                        <Form>
                            <div >
                                <Field type="text" 
                                    value={formik.values.email}
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="email" 
                                    />
                                {formik.errors.email && formik.touched.email && (<div className="error">{formik.errors.email}</div>)}<br/>
                                
                                <Field type="text"
                                    value={formik.values.password}
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="password"  />
                                {formik.errors.password && formik.touched.password && <div className="error">{formik.errors.password}</div>}
                                <br />
                                <Field
                            type='submit'
                            value='LOGIN'
                            className="btn btn-primary btn-sm"
                        />
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
        </div>
    )
}

export default Login