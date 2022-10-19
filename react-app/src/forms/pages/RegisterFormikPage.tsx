import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';


export const RegisterFormikPage = (  ) => {

    return (
        <div>
        
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1:'',
                    password2:'',
                }}
                onSubmit= { (values) => {
                    console.log( values );
                }}
                validationSchema = {
                    Yup.object({
                        name: Yup.string()
                            .min(2,'Must be 2 Characters minimum')
                            .max(15,'Must be 15 Characters maximum' )
                            .required('Required'),
                        email: Yup.string().email('Invalid email address')
                            .min(6,'Must be 6 Characters minimum')
                            .required('Required'),
                        password1: Yup.string()
                            .min(6,'Must be 6 Characters minimum')
                            .required('Required'),
                        password2: Yup.string()
                        .oneOf([ Yup.ref('password1'), null, 'Both passwords are not the same'])
                        .required('Required'),
                    })
                }
            >   
                { ( {handleReset}) => (
                    <Form>
                    <MyTextInput
                        label='Name'
                        name='name'
                        placeholder='james'
                    />

                    <MyTextInput
                        label='Email'
                        name='email'
                        placeholder='james@google.com'
                    />

                    <MyTextInput
                        label='Password'
                        name='password1'
                        placeholder='********'
                    />


                    <MyTextInput
                        label='Confirm Password'
                        name='password2'
                        placeholder='********'
                    />

                        <button type="submit">Create</button>
                        <button type="button" onClick={handleReset}>Reset</button>    
                    </Form>
                ) }

            </Formik>
 
            

        </div>
        )
}
