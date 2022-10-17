import { useFormik,Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
    firstName: string ,
    lastName: string,
    email: string,
} 

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName:'',
                    email:'',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must have 12 Characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(10, 'Must be 10 Characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address')
                        .required('Required'),
                    terms: Yup.boolean()
                                .oneOf([true], 'Must accept the Conditions.'),
                    jobType: Yup.string()
                    .notOneOf(['it-jr'],'this option is not acepted.' )
                                .required('Required'),
                })
            }>
                { ( formik ) => (
                    <Form>
                        <label htmlFor='firstName' >First Name</label>
                        <Field name='firstName' type='text'/>
                        <ErrorMessage name='firstName' component='span'/>
        
                        <label htmlFor='lastName' >Last Name</label>
                        <Field name='lastName' type='text'/>
                        <ErrorMessage name='lastName' component='span'/>
                        
                        <label htmlFor='email' >Email Address</label>
                        <Field name='email' type='text'/>
                        <ErrorMessage name='email' component='span'/>

                        <label htmlFor='jobType'>job Type</label>
                        <Field name='jobType' as='select'>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Desginer</option>
                            <option value='it-senior'>IT Senior</option>
                            <option value='it-jr'>IT Junior</option>
                        </Field>
                        <ErrorMessage name='jobType' component='span'/>

                        <label> 
                            <Field name='terms' type='checkbox'/>
                            Terms and Conditions
                        </label>
                        
                        <ErrorMessage name='terms' component='span'/>  
            
                        <button type='submit'>Submit</button>        
                    </Form>
                )
                    
                }


            </Formik>

        </div>
    )
}
