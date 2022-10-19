import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from 'yup';

const initialvalues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson ) {
    initialvalues[ input.name ] = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string()

    for (const rule of input.validations ) {
        if ( rule.type === 'required' ) {
            schema = schema.required('This field is required')
        }

        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any ).value || 2, `Minimum of ${ (rule as any ).value || 2 } Characters`)
        }

        if ( rule.type === 'email' ) {
            schema = schema.email('This field is required')
                            
        }

        
    }

    requiredFields[ input.name ] = schema;

}

const validationSchema = Yup.object({...requiredFields } );

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={initialvalues}
            validationSchema={ validationSchema }
            onSubmit={(values)=> console.log(values)}>
            {(formik) => (
                <Form noValidate>
                    { formJson.map( ({type, name, placeholder, label, options }) => {

                        if ( type === 'input' || type === 'password' || type === 'email') {
                            return <MyTextInput 
                            type={ (type as any )} 
                            name={name} 
                            label={ label } 
                            placeholder={placeholder}
                            key={ name }/>
                        } else if ( type === 'select') { 
                            
                            return (
                                <MySelect
                                    key={name}
                                    label={label}
                                    name={name}
                                >
                                    <option value="">Select an Option</option>
                                    {
                                        options?.map( ( { id, label } )  => (
                                            <option key={id} value={ id }>{ label }</option>
                                        ) )
                                    }

                                </MySelect> 
                            )
                        }

                        throw new Error(`Type: ${ type } isn't supported`) }  )}
                    <button type="submit">Submit</button>
                </Form>
                
            )}
        </Formik>
    </div>
  )
}
