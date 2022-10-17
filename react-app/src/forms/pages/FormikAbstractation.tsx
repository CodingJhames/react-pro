import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MyTextInput, MySelect }  from '../components';

import '../styles/styles.css';

interface FormValues {
    firstName: string ,
    lastName: string,
    email: string,
} 


export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

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
                        <MyTextInput 
                            label='First Name' 
                            name='firstName'
                            placeholder='James'
                        />
                        
                        <MyTextInput 
                            label='Last Name' 
                            name='lastName'
                            placeholder='Mejia'
                        />

                        <MyTextInput 
                            label='Email' 
                            name='email'
                            placeholder='James@google.com'
                            type='email'
                        />
                    
                        <MySelect label='Job Type' name='jobType'>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Desginer</option>
                            <option value='it-senior'>IT Senior</option>
                            <option value='it-jr'>IT Junior</option>
                        </MySelect>
                        
                        <MyCheckbox label='Terms & Conditions' name='terms' />
            
                        <button type='submit'>Submit</button>        
                    </Form>
                )
                    
                }


            </Formik>

        </div>
    )
}
