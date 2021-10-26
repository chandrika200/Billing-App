import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { startUpdateProductData, clearProductData } from '../../../actions/BillingAction'

const EditProduct = (props) => {
    const { handleToggle, name, price, _id } = props

    const initialValues = {
        name: name,
        price: price
    }
    const dispatch = useDispatch()

    const validationSchema = () => {
        const validate = Yup.object({
            name: Yup.string().required('Required'),
            price: Yup.number().required('Required')
        })
        return validate
    }

    const onSubmit = (values, onSubmitProps) => {
        onSubmitProps.resetForm()
        dispatch(startUpdateProductData(_id, values))
        handleToggle(false)
    }

    return (
        <div>
            <h4 style={{textAlign:"center"}}>Edit product</h4>
        <div className="App">
            
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema()}
                onSubmit={onSubmit}>
                {(formik) => (

                    <Form >
                        <Field
                            type='text'
                            placeholder='enter name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='name'
                            
                        />
                        {formik.touched.name && (
                            formik.errors.name && <span className="error">{formik.errors.name}</span>
                        )}
                        <Field
                            type='number'
                            placeholder='enter price'
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='price'
                            
                        />
                        {formik.touched.price && (
                            formik.errors.price && <span className="error">{formik.errors.price}</span>
                        )}
                        <Field
                            type='submit'
                            value='update'
                            className="btn btn-primary btn-sm mb-2"
                        />

                        <Field
                            type='submit'
                            value='cancel'
                            onClick={() => {
                                handleToggle(false)
                                dispatch(clearProductData())
                            }} className="btn btn-danger btn-sm mb-2"
                        />
                    </Form>
                )}
            </Formik>
        </div>
        </div>
    )
}

export default EditProduct